const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const getUserGroups = (token: string): Promise<Response> => {
  return fetch(`${BASE_URL}/groups`, {
    method: "GET",
    headers: {
      "access-token": token,
    },
  });
};
