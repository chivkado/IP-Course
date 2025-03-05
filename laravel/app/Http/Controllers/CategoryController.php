<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // --- Get /api/categories
    public function getCategories() {
        $categories = Category::all();
        return $categories;
    }

    // -- Post /api/categories
    public function createCategory(Request $request) {
        $category = new Category();
        $category->name =  $request->get('name');

        $category->save();
        return ["message" => "success"];
    }

    // --- Get/api/categories/{categoryId}
    public function getCategory($categoryId) {
        return ["message" => "Getting 1 category base on given categoryId"];
    }

    //--Patch/api/categories/{categoryId}
    public function updateCategory($categoryId) {
        return ["message" => "Updating 1 category base on given categoryId"];
    }

    // --- Delete /api/categories/{categoryId}
    public function deleteCategory ($categoryId) {
        return ["message" => "Deleting 1 category base on given categoryId"];
    }
}
