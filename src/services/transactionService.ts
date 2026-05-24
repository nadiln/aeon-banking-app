import { Transaction, TransactionResponse } from "@/types/transaction";
import cachedAxiosInstance from "./axiosInstance";

// Mock data to be returned instead of hitting real API
const mockResponse: TransactionResponse = {
  data: [
    {
      refId: "123ABC",
      transferDate: "2024-10-15T12:34:56Z",
      recipientName: "John Doe",
      transferName: "Salary Payment",
      amount: 1500.0,
    },
    {
      refId: "456DEF",
      transferDate: "2024-09-21T09:12:45Z",
      recipientName: "Jane Smith",
      transferName: "Invoice Payment",
      amount: 2300.75,
    },
    {
      refId: "789GHI",
      transferDate: "2024-10-05T16:18:30Z",
      recipientName: "Robert Brown",
      transferName: "Refund",
      amount: -500.0,
    },
    {
      refId: "101JKL",
      transferDate: "2024-08-30T11:47:22Z",
      recipientName: "Emily Davis",
      transferName: "Bonus Payment",
      amount: 1200.0,
    },
  ],
};

// Mock adapter that intercepts the request and returns mock data
cachedAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // This interceptor catches any request to /transactions and returns mock data
    if (error.config?.url === "/transactions") {
      return Promise.resolve({
        data: mockResponse,
        status: 200,
        statusText: "OK",
        headers: {},
        config: error.config,
      });
    }
    return Promise.reject(error);
  },
);

// Mock request interceptor to return mock data without making actual request
cachedAxiosInstance.interceptors.request.use((config) => {
  if (config.url === "/transactions") {
    // Return a mocked response by throwing a special error that we catch above
    return Promise.reject({
      config,
      message: "Mock request",
    });
  }
  return config;
});

export async function fetchTransactions(): Promise<Transaction[]> {
  try {
    // For mocking, we return the mock data directly
    // In a real app, this would be: const response = await cachedAxiosInstance.get('/transactions');
    return mockResponse.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}
