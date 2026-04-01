const express = require('express');
const router = express.Router();
const { createRecord, getRecords, getDashboardSummary } = require('../controllers/recordController');
const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

// 1. Everyone (authenticated) can view records
router.get('/', protect, getRecords);

// 2. Only Admin can create records
router.post('/', protect, authorize(['admin']), createRecord);

// 3. Admin and Analyst can see the Dashboard Summary
router.get('/summary', protect, authorize(['admin', 'analyst']), getDashboardSummary);

module.exports = router;