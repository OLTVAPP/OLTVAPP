<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\OrvosController;
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
Route::get('/bejelentkezes/{felhasznalo_nev}/{jelszo}', [FelhasznaloController::class, 'bejelentkezes']);
Route::get('/felhasznalo', [FelhasznaloController::class, 'index']);


Route::get('/keszlet/{orvos_id}', [OrvosController::class, 'keszlet']);
Route::get('/betegek/{orvos_id}', [OrvosController::class, 'betegek']);
Route::get('/beteg/{gyerek_taj}', [OrvosController::class, 'beteg']);


Route::put('/beteg_modosit/{gyerek_taj}', [OrvosController::class, 'betegModosit']);

Route::post('/uj_beteg/{orvos_id}/{felhasznalo_email}', [OrvosController::class, 'ujBeteg']);
