import React from 'react';
import { Link } from '@inertiajs/react';

export default function Product({ products }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <Link 
                href="/products/create" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block"
            >
                Add New Product
            </Link>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="border p-4 rounded-md shadow-sm">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">{product.name}</span>
                                <span className="text-gray-600">${product.price}</span>
                                <span className="text-sm text-gray-500">{product.stocks} in stock</span>
                            </div>
                            <div className="mt-2">
                                <Link 
                                    href={`/products/${product.id}/edit`} 
                                    className="text-blue-600 hover:underline"
                                >
                                    Edit
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}