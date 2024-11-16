import { useForm } from '@inertiajs/react'

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        price: "",
        stocks: "",
    });

function submit(e){
        e.preventDefault()
        post("/products/")
    }

    return (
        <>
            <h1 className="text-3xl font-bold">Create Product</h1>

            <div className="w-full sm:w-full mx-auto p-4">
                <form onSubmit={submit}>
                    {/* Name input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block">Product</label>
                        <input
                            id='name'
                            type="text"
                            className={`w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 ${errors.name ? '!ring-red-500' : 'focus:ring-purple-500'}`}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block">Price</label>
                        <input
                            id='price'
                            type="number"
                            className={`w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 ${errors.price ? '!ring-red-500' : 'focus:ring-purple-500'} `}
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        />
                        {errors.price && <p className='text-red-500'>{errors.price}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="stocks" className="block">Stocks</label>
                        <input
                            id='stocks'
                            type="number"
                            className={`w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 ${errors.stocks ? '!ring-red-500' : 'focus:ring-purple-500'}`}
                            value={data.stocks}
                            onChange={(e) => setData('stocks', e.target.value)}
                        />
                        {errors.stocks && <p className='text-red-500'>{errors.stocks}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 py-2 mt-4"
                        disabled={processing} // Disable while processing
                    >
                        Create
                    </button>
                </form>
            </div>
        </>
    );
}
