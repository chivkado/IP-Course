<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_we_can_access_get_all_categories_api()
    {
        // Seed the database with test data
        $this->artisan('db:seed', ['--class' => 'CategorySeeder']);

        $response = $this->get('/api/categories');

    $response->assertStatus(200)
        ->assertJsonStructure([
            'data' => [
                '*' => ['id', 'name', 'created_at', 'updated_at']
            ]
        ]);


    }
}
