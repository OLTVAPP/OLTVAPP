<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BeadasController;
use App\Http\Controllers\CsaladController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\ForgalmazoController;
use App\Http\Controllers\GyerekController;
use App\Http\Controllers\OltasController;
use App\Http\Controllers\OrvosController;
use App\Http\Controllers\RendeloController;
use App\Http\Controllers\SzuloController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Adminoknak!
//felhasznalok
Route::get('/felhasznalo', [FelhasznaloController::class, 'index']);
Route::get('/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'show']);
Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);
Route::get('/felhasznalo_keres/{felhasznalo_nev}', [FelhasznaloController::class, 'bejelentkezes']);
Route::put('/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'update']);

//oltas
Route::get('/oltas', [OltasController::class, 'index']);
Route::post('/oltas', [OltasController::class, 'store']);
Route::put('/oltas/{oltas_id}', [OltasController::class, 'update']);

//rendelo
Route::get('/rendelo', [RendeloController::class, 'index']);
Route::post('/rendelo', [RendeloController::class, 'store']);
Route::put('/rendelo/{rendelo_id}', [RendeloController::class, 'update']);

//Orvosoknak!
//felhasznalok (gyerek, szülő)

//lekérdezések
Route::get('/csalad', [CsaladController::class, 'getCsalad']);
