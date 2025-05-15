<!DOCTYPE html>
<html>
<head>
    <title>Gallery</title>
</head>
<body>
    <h1>Image Gallery</h1>

    @if (session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    @foreach ($thumbnails as $thumb)
        <div style="display: inline-block; margin: 10px;">
            <img src="{{ asset('storage/thumbnails/' . $thumb) }}" width="200" height="200">
        </div>
    @endforeach

</body>
</html>
