import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const cookieHeader = cookieStore.toString();
console.log("cookies headers ", cookieHeader)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
    headers: { Cookie: cookieHeader },
    cache: "no-store",
  });

  const data = await res.json();
  console.log("RESPONSE DATA FROM BACKEND ", data)
  return new Response(JSON.stringify(data), { status: res.status });
}
