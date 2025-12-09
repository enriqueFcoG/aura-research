import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-48 bg-primary-light text-gray-200 p-6 flex flex-col">
        <h2 className="text-xl font-semibold mb-8">Aura</h2>

        <nav className="flex flex-col gap-4">
          <Link
            href="/home"
            className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
          >
            Home
          </Link>

          <Link
            href="/profile"
            className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
          >
            Profile
          </Link>

        </nav>

        <div className="mt-auto">
          <Link
            href="/logout"
            className="block mt-6 bg-secondary-light hover:bg-red-700 px-3 py-2 rounded-md text-center transition"
          >
            Log out
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
