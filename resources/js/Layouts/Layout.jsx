import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-purple-500 text-white shadow-md h-screen px-4 py-6">
                <div className="text-2xl font-semibold mb-8 text-center">
                    <a href="/" className="hover:text-purple-200">Aurie Store</a>
                </div>
                <nav className="space-y-4">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-purple-600"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/products/"
                        className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-purple-600"
                    >
                        Products
                    </Link>
                    <Link
                        href="/create"
                        className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-purple-600"
                    >
                        POS
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-white-200">
                {children}
            </main>
        </div>
    );
}
