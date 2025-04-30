<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    // ✅ Tell Laravel to use the correct table name
    protected $table = 'payment';

    // ✅ Allow these fields to be mass-assigned
    protected $fillable = [
        'customer_id',
        'order_id',
        'amount',
        'payment_method',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
