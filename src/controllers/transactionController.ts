import type { Transaction } from "../models/transaction";

const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const getUserTransactions = (
  token: string,
  bankId: string,
  page: number = 1
): Promise<Response> => {
  return fetch(`${BASE_URL}/transactions/${bankId}?page=${page}`, {
    method: "GET",
    headers: {
      "access-token": token,
    },
  });
};

export const searchTransactions = (
  token: string,
  bankId: string,
  search: string,
  page: number = 1
): Promise<Response> => {
  return fetch(
    `${BASE_URL}/transactions/find/?search=${search}&bankId=${bankId}&page=${page}`,
    {
      method: "GET",
      headers: {
        "access-token": token,
      },
    }
  );
};

export const createTransactions = (
  token: string,
  transactions: Transaction[]
): Promise<Response> => {
  return fetch(`${BASE_URL}/transactions/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "access-token": token,
    },
    body: JSON.stringify([...transactions]),
  });
};
