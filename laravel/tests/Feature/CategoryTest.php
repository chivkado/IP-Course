<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Category;
use PHPUnit\Framework\Attributes\Test;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function test_if_we_can_access_get_all_categories_api()
    {
        Category::factory()->count(3)->create();

        $response = $this->get('/api/categories');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => ['id', 'name', 'slug', 'description', 'created_at', 'updated_at']
                     ]
                 ]);
    }

    #[Test]
    public function test_can_create_category()
    {
        $response = $this->postJson('/api/categories', [
            'name' => 'Test Category',
            'description' => 'Sample description'
        ]);

        $response->assertStatus(201)
                 ->assertJsonFragment(['name' => 'Test Category']);

        $this->assertDatabaseHas('categories', ['name' => 'Test Category']);
    }

    #[Test]
    public function test_can_get_single_category()
    {
        $category = Category::factory()->create(['name' => 'Single Category']);

        $response = $this->get("/api/categories/{$category->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['name' => 'Single Category']);
    }

    #[Test]
    public function test_can_update_category()
    {
        $category = Category::factory()->create(['name' => 'Old Name']);

        $response = $this->patchJson("/api/categories/{$category->id}", [
            'name' => 'Updated Name'
        ]);

        $response->assertStatus(200)
                 ->assertJsonFragment(['name' => 'Updated Name']);

        $this->assertDatabaseHas('categories', ['id' => $category->id, 'name' => 'Updated Name']);
    }

    #[Test]
    public function test_can_delete_category()
    {
        $category = Category::factory()->create(['name' => 'To Be Deleted']);

        $response = $this->delete("/api/categories/{$category->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Category deleted successfully']);

        $this->assertDatabaseMissing('categories', ['id' => $category->id]);
    }
}
