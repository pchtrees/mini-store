<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Sample Product',
            'category' => 'Sample Product', 
            'price' => 19.99,
            'barcode' => '1234567890123',
            'stocks' => 50,
            'status' => 'active',
        ]);

        Product::factory(30)->create();
    }
}
