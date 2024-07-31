<?php

use App\Http\Controllers\Api\AlbumController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\FaixaController;
use App\Models\Faixa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('products', ProductController::class);

Route::get('albums/search', [AlbumController::class, 'searchByTitle']);
Route::get('faixas/search', [FaixaController::class, 'searchByTitle']);

Route::apiResource('albums', AlbumController::class);
Route::apiResource('albums.faixas', FaixaController::class);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
