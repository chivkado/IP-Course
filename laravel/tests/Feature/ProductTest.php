<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;
use App\Models\Category;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_if_we_can_access_get_all_products_api()
    {
        // Create a category first (foreign key needed)
        $category = Category::create([
            'name' => 'Test Category'
        ]);

        // Create a product using that category
        Product::create([
            'name' => 'Test Product',
            'category_id' => $category->id,
            'pricing' => 100,
            'description' => 'Test description',
            'images' => ['image1.jpg'] // this works if images is cast as array in Product.php
        ]);

        // Call the API
        $response = $this->get('/api/products');

        // Check the JSON structure
        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => ['id', 'name', 'category_id', 'pricing', 'description', 'images']
                     ]
                 ]);
    }
}
