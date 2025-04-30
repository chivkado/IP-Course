<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Cart;
use App\Models\Customer;
use App\Models\Product;
use App\Models\Category;

class CartTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_create_a_cart_item()
    {
        // Create required related models
        $customer = Customer::create([
            'name' => 'Cart Tester',
            'email' => 'cart@example.com',
            'phone' => '099999999',
        ]);

        $category = Category::create([
            'name' => 'Test Category',
        ]);

        $product = Product::create([
            'name'        => 'Sample Product',
            'category_id' => $category->id,
            'pricing'     => 9.99,
            'description' => 'This is a test product.',
            'images'      => json_encode(['test.jpg']), // or array if casted
        ]);

        $cart = Cart::create([
            'customer_id' => $customer->id,
            'product_id'  => $product->id,
        ]);

        $this->assertDatabaseHas('carts', [
            'customer_id' => $customer->id,
            'product_id'  => $product->id,
        ]);
    }
}
