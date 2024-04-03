const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export interface DefaultResponse {
  status: number;
  message: string;
  data: any;
}

export const loginUser = (
  email: string,
  password: string
): Promise<Response> => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const registerUser = (
  email: string,
  username: string,
  password: string
): Promise<Response> => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });
};
