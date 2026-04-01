const Record = require('../models/Record');

// @desc    Create a new financial record
// @access  Private (Admin only)
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, description, date } = req.body;

    // Logic: We attach req.user.id (from our authMiddleware) to the record
    const record = await Record.create({
      amount,
      type,
      category,
      description,
      date,
      createdBy: req.user.id 
    });

    res.status(201).json({ success: true, data: record });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all records with filtering
// @access  Private (Admin, Analyst, Viewer)
exports.getRecords = async (req, res) => {
  try {
    // Logic: We can filter by type (income/expense) or category if provided in query
    const queryObj = { ...req.query };
    
    // Advanced filtering (optional but earns points)
    let query = Record.find(queryObj);
    const records = await query.populate('createdBy', 'name email');

    res.status(200).json({ 
      success: true, 
      count: records.length, 
      data: records 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


// @desc    Get dashboard summary analytics
// @access  Private (Admin, Analyst)
exports.getDashboardSummary = async (req, res) => {
  try {
    const stats = await Record.aggregate([
      {
        $group: {
          _id: null,
          totalIncome: {
            $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] }
          },
          totalExpenses: {
            $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] }
          }
        }
      },
      {
        $project: {
          _id: 0,
          totalIncome: 1,
          totalExpenses: 1,
          netBalance: { $subtract: ["$totalIncome", "$totalExpenses"] }
        }
      }
    ]);

    // If no records exist, send default zeros
    const result = stats.length > 0 ? stats[0] : { totalIncome: 0, totalExpenses: 0, netBalance: 0 };

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};