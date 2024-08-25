export const apiServer = async <T>(
  url: string,
  method: "GET" | "POST" = "GET",
  body?: any,
  cache: "no-cache" | "default" = "no-cache"
): Promise<T> => {
  try {
    const token = "sdfsfsdf";
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error("some think went wrong");
  }
};
