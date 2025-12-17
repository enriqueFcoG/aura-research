import { getCurrentUser } from "@/services/users.service";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getCurrentUser();

  if (user?.email) {
    redirect("/home");
  }

  return (
    <div className="flex justify-center items-center h-screen">    
      {children}
    </div>
  );
}
