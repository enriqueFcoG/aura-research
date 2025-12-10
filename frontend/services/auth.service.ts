export const  authenticateUser = async ({ email, password }: {email:string, password:string}) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) return null;

  const user = await res.json();

  if (!user.access_token) return null;

  return {
    id: user?.id,
    email: user?.email,
    access_token: user?.access_token,
    refresh_token: user?.refresh_token,
  };
}