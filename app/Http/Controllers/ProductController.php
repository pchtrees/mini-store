<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
 

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->when($request->input('filter'), function ($query, $filter) {
                $query->where('name', 'like', '%' . $filter . '%')
                      ->orWhere('category', 'like', '%' . $filter . '%')
                      ->orWhere('price', 'like', '%' . $filter . '%')
                      ->orWhere('barcode', 'like', '%' . $filter . '%') 
                      ->orWhere('stocks', 'like', '%' . $filter . '%')
                      ->orWhere('status', 'like', '%' . $filter . '%');
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return inertia('Product/Index', [
            'products' => $products,
            'filters' => $request->only(['filter']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        sleep(2);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'price' => 'required|numeric',
            'barcode' => 'required|numeric|digits_between:1,18',
            'stocks' => 'required|integer', 
            'status' => 'required|boolean',
        ]);

        // Save the product in the database
        Product::create($validated);

        // Redirect back to the products list with a success message
        return redirect()->route('products.index')->with('success', 'Product created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'price' => 'required|numeric',
            'barcode' => 'required|numeric|digits_between:1,18',
            'stocks' => 'required|numeric', 
            'status' => 'required|boolean', 
        ]);

        $product->update($validatedData);

        return redirect()->route('products.index')->with(
            'success', 'The product was updated successfully!'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index')->with(
            'message', 'The product was deleted!'
        );
    }
}
