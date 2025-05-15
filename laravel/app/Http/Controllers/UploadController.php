<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        // 1. Validate the uploaded image
        $request->validate([
            'document' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $image = $request->file('document');
        $fileName = uniqid() . '.' . $image->getClientOriginalExtension();

        // 2. Upload original image to MinIO
        $originalPath = $image->storeAs('uploads', $fileName, 'minio');

        // 3. Create thumbnail using Intervention Image v3 with GD driver
        $manager = new ImageManager(new Driver());
        $thumbnail = $manager->read($image->getPathname())->cover(200, 200);

        // 4. Save thumbnail temporarily to local disk
        $tempThumbPath = storage_path('app/temp_thumb_' . $fileName);
        $thumbnail->save($tempThumbPath);

        // 5. Upload thumbnail to MinIO
        $thumbPath = 'thumbnails/' . $fileName;
        Storage::disk('minio')->put($thumbPath, file_get_contents($tempThumbPath));

        // 6. Clean up temp file
        unlink($tempThumbPath);

        // 7. Return file paths as JSON response
        return response()->json([
            'original' => $originalPath,
            'thumbnail' => $thumbPath,
        ]);
    }
}
