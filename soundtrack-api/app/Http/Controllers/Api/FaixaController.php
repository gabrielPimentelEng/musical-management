<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Album;
use App\Models\Faixa;

class FaixaController extends Controller
{
    public function index(Album $album)
    {
        $faixas = $album->faixas; // Assumes Album has a faixas relationship
        return response()->json($faixas);
    }

    public function store(Request $request, Album $album)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'duration' => 'required|string|regex:/^\d{1,2}:\d{2}$/',
        ]);

        $faixa = new Faixa($validated);
        $album->faixas()->save($faixa); // Assumes Album has a faixas relationship
        return response()->json($faixa, 201);
    }

    public function show(Album $album, Faixa $faixa)
    {
        return response()->json($faixa);
    }

    public function update(Request $request, Album $album, Faixa $faixa)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'duration' => 'required|string|regex:/^\d{1,2}:\d{2}$/',
        ]);

        $faixa->update($validated);
        return response()->json($faixa);
    }

    public function destroy(Album $album, Faixa $faixa)
    {   
        $deleted_data = $faixa;
        $faixa->delete();
        return response()->json([
            'message' => "Faixa '{$deleted_data->title}' successfully deleted",
        ],200 );
    }

    public function searchByTitle(Request $request)
    {
        $validated = $request->validate([
            'query' => 'required|string|max:255',
        ]);

        $query = $validated['query'];

        $faixas = Faixa::where('title', 'like', '%' . $query . '%')->get();

        return response()->json($faixas);
    }
    
}
