import { Head, Link, usePage, useForm } from "@inertiajs/react";
import { route } from "ziggy-js"; 
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Index({ products }) {
    const { flash } = usePage().props;

    const [flashMsg, setFlashMsg] = useState(flash.message);
    const [flashSccs, setFlashSccs] = useState(flash.success);

    setTimeout(() => {
        setFlashMsg(null)
    }, 2000)
    setTimeout(() => {
        setFlashSccs(null)
    }, 2000)

    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(route('products.destroy', product.id)); // Pass the product ID to the route helper
    }

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <h1 className="text-3xl font-bold">Products</h1>
            <div className="relative">
                {flashMsg && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-18 bg-red-500 p-2 rounded-md shadow-lg text-sm text-white">
                        {flashMsg}
                    </div>
                )}
                {flashSccs && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-18 bg-green-700 p-2 rounded-md shadow-lg text-sm text-white">
                        {flashSccs}
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
                        {products.data.map((product) => {
                            // Setup the form hook for each product

                            function submit(e) {
                                e.preventDefault();
                                destroy(route('products.destroy', product.id)); // Pass product.id dynamically
                            }

                            return (
                                <tr key={product.id} className="border-t">
                                    <td className="px-6 py-4 text-sm text-gray-800">{product.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">₱{product.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{product.stocks}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(product.created_at).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-blue-600 flex gap-2">
                                        <Link href={route('products.edit', product)}  className="hover:underline">
                                            <FontAwesomeIcon icon={faEdit} className="text-purple-700" /> 
                                        </Link>
                                        <Link href={route('products.show', product)} className="hover:underline">
                                            <FontAwesomeIcon icon={faEye} className="text-purple-700" />
                                        </Link>
                                        <form onSubmit={submit}>
                                            <button type="submit">
                                                <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })}
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
