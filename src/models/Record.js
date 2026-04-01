const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  amount: { 
    type: Number, 
    required: [true, 'Please add an amount'] 
  },
  type: { 
    type: String, 
    enum: ['income', 'expense'], 
    required: true 
  },
  category: { 
    type: String, 
    required: [true, 'Category is required (e.g. Food, Salary)'] 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  description: { 
    type: String 
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Record', recordSchema);