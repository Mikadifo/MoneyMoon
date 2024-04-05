import type { Transaction } from "../models/transaction";

const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const getUserTransactions = (
  token: string,
  bankId: string
): Promise<Response> => {
  return fetch(`${BASE_URL}/transactions/${bankId}`, {
    method: "GET",
    headers: {
      "access-token": token,
    },
  });
};

export const createTransactions = (
  token: string,
  bankId: string,
  transactions: Transaction[]
): Promise<Response> => {
  return fetch(`${BASE_URL}/transactions}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "access-token": token,
    },
    body: JSON.stringify({
      bankId,
      transactions: JSON.stringify(transactions),
    }),
  });
};
