<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Order;
use App\Models\Customer;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_create_an_order()

    {
        // Create a customer
        $customer = Customer::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '012345678',
        ]);

        // Create an order with properly formatted date
        $order = Order::create([
            'customer_id'  => $customer->id,
            'total_amount' => 99.99,
            'status'       => 'pending',
            'order_date'   => '30/04/2025 14:00:00', // ✅ Format matches your model
        ]);

        // Assert the order is in the database
        $this->assertDatabaseHas('order', [
            'id'          => $order->id,
            'customer_id' => $customer->id,
            'status'      => 'pending',
        ]);
    }
}
