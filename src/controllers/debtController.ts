const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const getUserDebts = (token: string): Promise<Response> => {
  return fetch(`${BASE_URL}/debts`, {
    method: "GET",
    headers: {
      "access-token": token,
    },
  });
};
