<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Customer;
use Illuminate\Support\Str;

class CustomerTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_create_a_customer()
    {
        $customer = Customer::create([
            'name' => 'Test Customer',
            'email' => 'customer' . Str::random(4) . '@example.com',
            'phone' => '012345678',
            // include any other required fields based on your Customer model
        ]);

        $this->assertDatabaseHas('customer', [
            'name' => 'Test Customer',
            'phone' => '012345678',
        ]);
    }
}
