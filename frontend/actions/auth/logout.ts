"use server"
import { redirect } from "next/navigation";

export async function logout() {
    //call backend api to logout user
    await fetch(`${process.env.BACKEND_URL}/api/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    redirect('/')
}