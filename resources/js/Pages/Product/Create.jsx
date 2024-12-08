import { useForm, Head } from '@inertiajs/react'

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        category: "",
        price: "",
        barcode: "",
        stocks: "",
        status: "",
    });

function submit(e){
        e.preventDefault()
        post("/products/")
    }

    return (
        <>
            <Head>
                <title>Create</title>
            </Head>
            <h1 className="text-3xl font-bold">Create Product</h1>

            <div className="w-full sm:w-1/2 mx-auto my-20 p-4">
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
                        <label htmlFor="name" className="block">Category</label>
                        <select
                            id="category"
                            className={`w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 ${errors.category ? '!ring-red-500' : 'focus:ring-purple-500'}`}
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="DELATA">DELATA</option>
                            <option value="NOODLES">NOODLES</option>
                            <option value="PANG LUTO">PANG LUTO</option>
                            <option value="SNACK & DRINKS">SNACK & DRINKS</option>
                            <option value="PANG LABA">PANG LABA</option>
                            <option value="HYGIENE">HYGIENE</option>
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category}</p>}
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
                        <label htmlFor="barcode" className="block">Barcode</label>
                        <input
                            id='barcode'
                            type="number"
                            className={`w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 ${errors.barcode ? '!ring-red-500' : 'focus:ring-purple-500'}`}
                            value={data.barcode}
                            onChange={(e) => setData('barcode', e.target.value)}
                        />
                        {errors.barcode && <p className='text-red-500'>{errors.barcode}</p>}
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
                    <div className="mb-4">
                        <label htmlFor="status" className="block">Status</label>
                        <select
                            id="status"
                            className={`w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 ${errors.status ? '!ring-red-500' : 'focus:ring-purple-500'}`}
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                        >
                            <option value="" disabled>Select status</option>
                            <option value="1">ACTIVE</option>
                            <option value="2">INACTIVE</option>
                        </select>
                        {errors.status && <p className='text-red-500'>{errors.status}</p>}
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
