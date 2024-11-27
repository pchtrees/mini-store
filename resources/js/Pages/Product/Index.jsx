import { Head, Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { useForm } from "@inertiajs/react";

export default function Index({ products }) {
    const { flash } = usePage().props;

    const { delete: destroy } = useForm();

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <h1 className="text-3xl font-bold">Products</h1>
            <div className="relative">
                {flash.message && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-18 bg-red-500 p-2 rounded-md shadow-lg text-sm text-white">
                        {flash.message}
                    </div>
                )}
                {flash.success && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-18 bg-green-700 p-2 rounded-md shadow-lg text-sm text-white">
                        {flash.success}
                    </div>
                )}
            </div>

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
                                <td className="px-6 py-4 text-sm text-blue-600 flex gap-2">
                                    <Link href={route('products.edit', product)} className="hover:underline">
                                        Edit
                                    </Link>
                                    <Link href={route('products.show', product)} className="hover:underline">
                                        Show
                                    </Link>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (window.confirm("Are you sure you want to delete this product?")) {
                                                destroy(route('products.destroy', product.id));
                                            }
                                        }}
                                    >
                                        <button
                                            type="submit"
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Links */}
                <div className="py-12 px-4 flex justify-center">
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
