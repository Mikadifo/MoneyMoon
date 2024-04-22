const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const createGroup = (token: string, name: string): Promise<Response> => {
  return fetch(`${BASE_URL}/groups`, {
    method: "POST",
    headers: {
      "access-token": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
};

export const getUserGroups = (token: string): Promise<Response> => {
  return fetch(`${BASE_URL}/groups`, {
    method: "GET",
    headers: {
      "access-token": token,
    },
  });
};

export const addTransactions = (
  token: string,
  groupId: string,
  transactions: string[]
): Promise<Response> => {
  return fetch(`${BASE_URL}/groups/add/${groupId}`, {
    method: "PUT",
    headers: {
      "access-token": token,
    },
    body: JSON.stringify(transactions),
  });
};
