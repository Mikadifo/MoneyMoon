import type { Debt } from "../models/debt";

const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const getUserDebts = (token: string): Promise<Response> => {
  return fetch(`${BASE_URL}/debts`, {
    method: "GET",
    headers: {
      "access-token": token,
    },
  });
};

export const payDebt = (
  token: string,
  name: string,
  amount: number
): Promise<Response> => {
  return fetch(`${BASE_URL}/debts/pay?name=${name}&amount=${amount}`, {
    method: "PUT",
    headers: {
      "access-token": token,
    },
  });
};

export const createDebt = (token: string, body: Debt): Promise<Response> => {
  return fetch(`${BASE_URL}/debts/create`, {
    method: "POST",
    headers: {
      "access-token": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteDebt = (token: string, name: string): Promise<Response> => {
  return fetch(`${BASE_URL}/debts/remove/${name}`, {
    method: "DELETE",
    headers: {
      "access-token": token,
    },
  });
};
