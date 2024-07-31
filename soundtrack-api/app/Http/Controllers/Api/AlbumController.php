<?php

namespace App\Http\Controllers\Api;

use App\Models\Album;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function index()
    {
        return Album::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'artist' => 'required|string|max:255',
            'release_date' => 'required|date',
        ]);

        return Album::create($validated);
    }

    public function show(Album $album)
    {
        return $album;
    }

    public function update(Request $request, Album $album)
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'artist' => 'string|max:255',
            'release_date' => 'date',
        ]);

        $album->update($validated);
        return $album;
    }

    public function destroy(Album $album)
    {   
        $deleted_data = $album;
        $album->delete();
        return response()->json([
            'message' => "Album '{$deleted_data->title}' successfully deleted",
        ],200 );
    }

    public function searchByTitle(Request $request)
    {
        $validated = $request->validate([
            'query' => 'required|string|max:255',
        ]);

        $query = $validated['query'];

        $albums = Album::where('title', 'like', '%' . $query . '%')->get();

        return response()->json($albums);
    }
}
