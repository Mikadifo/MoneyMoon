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

export const deleteDebt = (token: string, name: string): Promise<Response> => {
  return fetch(`${BASE_URL}/debts/remove/${name}`, {
    method: "DELETE",
    headers: {
      "access-token": token,
    },
  });
};
