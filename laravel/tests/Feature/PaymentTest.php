<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Payment;
use App\Models\Order;
use App\Models\Customer;
use Carbon\Carbon;

class PaymentTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_create_a_payment()
    {
        $customer = Customer::create([
            'name' => 'Payment User',
            'email' => 'payment@example.com',
            'phone' => '088888888',
        ]);

        $order = Order::create([
            'customer_id'   => $customer->id,
            'total_amount'  => 100.00,
            'status'        => 'completed',
            'order_date'    => now()->format('d/m/Y H:i:s'), // ✅ formatted for accessor
        ]);

        $payment = Payment::create([
            'customer_id'     => $customer->id,
            'order_id'        => $order->id,
            'amount'          => 100.00,
            'payment_method'  => 'credit_card',
        ]);

        $this->assertDatabaseHas('payment', [
            'customer_id'    => $customer->id,
            'order_id'       => $order->id,
            'amount'         => 100.00,
            'payment_method' => 'credit_card',
        ]);
    }
}
