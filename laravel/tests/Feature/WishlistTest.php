<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Wishlist;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Category;

class WishlistTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_add_a_product_to_wishlist()
    {
        // Create customer
        $customer = Customer::create([
            'name' => 'Wishlist User',
            'email' => 'wishlist@example.com',
            'phone' => '066666666',
        ]);

        // Create category
        $category = Category::create([
            'name' => 'Wishlist Category',
        ]);

        // Create product
        $product = Product::create([
            'name'        => 'Wishlist Product',
            'pricing'     => 20.00,
            'category_id' => $category->id,
            'description' => 'A product to add to wishlist',
            'images'      => ['wishlist.jpg'],
        ]);

        // Create wishlist entry
        $wishlist = Wishlist::create([
            'customer_id' => $customer->id,
            'product_id'  => $product->id,
        ]);

        // Assert DB has the wishlist entry
        $this->assertDatabaseHas('wishlist', [
            'customer_id' => $customer->id,
            'product_id'  => $product->id,
        ]);
    }
}
