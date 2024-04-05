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
