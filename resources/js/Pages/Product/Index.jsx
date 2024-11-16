import { Link } from "@inertiajs/react";

export default function Index({ products }) {
    return (
        <>
            <h1 className="text-3xl font-bold">Products</h1>
            <div className="flex justify-end my-4">
                <Link 
                    href="/products/create" 
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                >
                    Create New Product
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stocks</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created On</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="px-6 py-4 text-sm text-gray-800">{product.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">₱{product.price}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{product.stocks}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(product.created_at).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-sm text-blue-600">
                                    <Link href={`/products/${product.id}/edit`} className="hover:underline mx-2">
                                        Edit
                                    </Link>
                                    <Link href={`/products/${product.id}`} className="hover:underline">
                                        Show
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="py-12 px-4">
                    {products.links.map(link => (
                        link.url ? (
                            <Link 
                                key={link.label} 
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${ 
                                    link.active ? "text-purple-500 font-bold" : ""
                                }`}
                            />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-slate-600"
                            />
                        )
                    ))}
                </div>
            </div> 
        </>
    );
}
