<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Customer extends Model {
    use SoftDeletes;

    protected $table = 'customer';
    protected $fillable = ['name', 'email', 'phone'];

    public function cart() {
        return $this->hasMany(Cart::class);
    }

    public function wishlist() {
        return $this->hasMany(Wishlist::class);
    }

    public function order() {
        return $this->hasMany(Order::class);
    }

    public function payment() {
        return $this->hasMany(Payment::class);
    }
}
