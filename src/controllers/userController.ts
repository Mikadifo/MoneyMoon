const BASE_URL = (await import.meta.env.PUBLIC_API_URL) as string;

export const loginUser = async (email: string, password: string) => {
  let response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  response = await response.json();
  if (response.message === "error") {
    console.error(response.data);
  }

  return response;
};

export const registerUser = async (
  email: string,
  username: string,
  password: string
): Promise<Response> => {
  let response = await fetch(`${BASE_URL}/signup`, {
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
  response = await response.json();
  if (response.message === "error") {
    console.error(response.data);
  }

  return response;
};
