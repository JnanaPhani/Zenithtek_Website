# ZenithTek Form Submission Backend

This is a simple Express.js backend server to store form submissions from the ZenithTek website's contact form and export them to Excel.

## Setup

1. Install dependencies:

   ```
   cd Zenithtek_Website/server
   npm install
   ```

2. Start the server:
   ```
   npm run dev
   ```

This will start the server on port 5000.

## Available Endpoints

- `POST /api/submit-form` - Submit a new form entry
- `GET /api/submissions` - Get all form submissions (in a production environment, this should be protected by authentication)
- `GET /api/export-excel` - Download all submissions as an Excel file

## Excel Export Feature

When a user submits the contact form, the data is saved in memory (in a production environment, this should be saved to a database).

Administrators can access the admin dashboard at `/admin` to view all submissions and export them to Excel. The Excel file includes the following data:

- ID
- Name
- Email
- Subject
- Message
- Timestamp

## Production Considerations

For a production environment, consider the following enhancements:

1. Use a real database instead of in-memory storage
2. Add user authentication for admin access
3. Implement HTTPS
4. Set up proper CORS policies
5. Add rate limiting to prevent abuse
