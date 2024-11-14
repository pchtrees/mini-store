import { Link } from "@inertiajs/react";

export default function Product({ products }) {
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-6">Products</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created On</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="px-6 py-4 text-sm text-gray-800">{product.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">${product.price}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{product.stocks}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(product.created_at).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-sm text-blue-600">
                                    <Link href={`/products/${product.id}/edit`} className="hover:underline">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
