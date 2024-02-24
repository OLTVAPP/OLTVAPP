<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\SzuloController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/id/{id}', [SzuloController::class, 'atmasol']);
Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);



