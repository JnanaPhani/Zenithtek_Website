import React, { useState, useEffect } from "react";
import {
  Download,
  RefreshCw,
  Search,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface Submission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// API base URL
const API_BASE_URL = "http://localhost:5000";

// Custom toast styles
const toastStyles = {
  success: {
    style: {
      background: "#10B981",
      color: "#FFFFFF",
      padding: "16px",
      borderRadius: "8px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    iconTheme: {
      primary: "#FFFFFF",
      secondary: "#10B981",
    },
    duration: 5000,
  },
  error: {
    style: {
      background: "#EF4444",
      color: "#FFFFFF",
      padding: "16px",
      borderRadius: "8px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    iconTheme: {
      primary: "#FFFFFF",
      secondary: "#EF4444",
    },
    duration: 5000,
  },
};

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/submissions`);
      if (!response.ok) {
        throw new Error("Failed to fetch submissions");
      }
      const data = await response.json();
      setSubmissions(data);
      toast.success("Submissions loaded successfully", toastStyles.success);
    } catch (err) {
      setError("Error fetching submissions. Please try again.");
      toast.error(
        "Failed to load submissions. Please try again.",
        toastStyles.error
      );
      console.error("Error fetching submissions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleExportExcel = () => {
    toast.success("Preparing Excel download...", toastStyles.success);
    window.location.href = `${API_BASE_URL}/api/export-excel`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 80,
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h1 className="text-2xl font-audiowide text-primary">
                Form Submissions
              </h1>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <button
                  onClick={fetchSubmissions}
                  className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <RefreshCw size={18} className="mr-2" />
                  Refresh
                </button>
                <button
                  onClick={handleExportExcel}
                  className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Export Excel
                </button>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search submissions..."
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                {filteredSubmissions.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      No submissions found
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Subject
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredSubmissions.map((submission) => (
                          <tr key={submission.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {submission.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {submission.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {submission.subject}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(submission.timestamp)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
