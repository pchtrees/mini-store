import { useForm, Link, Head } from "@inertiajs/react";
import { route } from "ziggy-js"; // Correct import for route

export default function Show({ product }) {
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(route('products.destroy', product.id)); // Pass the product ID to the route helper
    }

    return (
        <>
        <Head>
            <title>Show</title>
        </Head>
        <div className="max-w-2xl mx-auto my-52 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-5xl font-semibold text-gray-800 mb-4 text-center">{product.name}</h1>
            <h1 className="text-5xl font-semibold text-gray-800 mb-4 text-center">{product.category}</h1>
            <div className="mb-4 text-center">
                <p className="text-2xl font-medium text-purple-600">Price: ₱{product.price}</p>
                <p className="text-2xl text-gray-700">Barcode: {product.barcode}</p>
                <p className="text-2xl text-gray-700">Stocks: {product.stocks}</p>
                <p className="text-2xl text-gray-700">Status: {product.status}</p>
            </div>
            <div className="mt-8 flex justify-between">
                <Link
                    href="/products"
                    className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                >
                    Back to Products
                </Link>
                
                <form onSubmit={submit}>
                    <button
                        type="submit"
                        className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Delete
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
