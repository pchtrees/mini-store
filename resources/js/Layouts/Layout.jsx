export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-purple-500 text-white shadow-md h-screen px-4 py-6">
                <div className="text-2xl font-semibold mb-8 text-center">
                    <a href="/" className="hover:text-purple-200">Aurie Store</a>
                </div>
                <nav className="space-y-4">
                    <a
                        href="/"
                        className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-purple-600"
                    >
                        Home
                    </a>
                    <a
                        href="/create"
                        className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-purple-600"
                    >
                        Create
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
