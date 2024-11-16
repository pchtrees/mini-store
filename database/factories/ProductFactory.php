<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word(), // Generate a short word as the product name
            'price' => $this->faker->randomFloat(2, 1, 100), // Generate a random price between 1 and 100
            'stocks' => $this->faker->numberBetween(1, 100), // Generate a random stock quantity between 1 and 100
        ];
    }
}
