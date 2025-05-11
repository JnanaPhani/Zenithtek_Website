const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const excel = require('exceljs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  exposedHeaders: ['Content-Disposition'] // Important for file downloads
}));

// Middleware
app.use(bodyParser.json());

// Store submissions in memory (in production, use a proper database)
let submissions = [];

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'ZenithTek API Server is running!' });
});

// API endpoint to receive form submissions
app.post('/api/submit-form', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    
    // Add timestamp
    const submission = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };
    
    // Save submission
    submissions.push(submission);
    console.log('New submission received:', submission);
    
    // Send success response
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// API endpoint to get all submissions (password protected in a real app)
app.get('/api/submissions', (req, res) => {
  console.log('Returning submissions:', submissions.length);
  res.json(submissions);
});

// API endpoint to download submissions as Excel
app.get('/api/export-excel', (req, res) => {
  try {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Form Submissions');
    
    // Define columns
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Subject', key: 'subject', width: 20 },
      { header: 'Message', key: 'message', width: 50 },
      { header: 'Timestamp', key: 'timestamp', width: 20 }
    ];
    
    // Add rows
    worksheet.addRows(submissions);
    
    // Style the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };
    
    // Set response headers
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=zenithtek-form-submissions.xlsx'
    );
    
    // Write to response
    workbook.xlsx.write(res)
      .then(() => {
        res.end();
      });
      
  } catch (error) {
    console.error('Error generating Excel file:', error);
    res.status(500).json({ success: false, message: 'Error generating Excel file' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the API at http://localhost:${PORT}`);
  console.log(`Admin dashboard available at http://localhost:5173/admin`);
}); 