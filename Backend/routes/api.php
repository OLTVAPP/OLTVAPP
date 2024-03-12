<?php

use App\Http\Controllers\Auth\RegisteredUserController;

use App\Http\Controllers\CsaladController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\OltasController;
use App\Http\Controllers\RendeloController;
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

Route::middleware(['auth:basic'])->group(function () {

}); 


Route::get('/id/{id}', [SzuloController::class, 'atmasol']);

Route::get('/felhasznalo', [FelhasznaloController::class, 'index']);

Route::get('/bejelentkezes/{felhasnalo_nev}/{jelszo}', [FelhasznaloController::class, 'bejelentkezes']);


//Adminoknak!
Route::get('/felhasznalo_szulo', [FelhasznaloController::class, 'filterBySzulo']);
Route::get('/felhasznalo_orvos', [FelhasznaloController::class, 'filterByOrvos']);
Route::get('/felhasznalo_admin', [FelhasznaloController::class, 'filterByAdmin']);


//felhasznalok
Route::get('/felhasznalo', [FelhasznaloController::class, 'index']);
Route::get('/bejelentkezett_felhasznalo', [FelhasznaloController::class, 'bejelentkezett_felhasznalo']);
Route::get('/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'show']);

Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);
Route::get('/felhasznalo_keres/{felhasznalo_nev}/{felhasznalo_jelszo}', [FelhasznaloController::class, 'bejelentkezes']);


Route::put('/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'update']);

//oltas
Route::get('/oltas', [OltasController::class, 'index']);
Route::post('/oltas', [OltasController::class, 'store']);
Route::put('/oltas/{oltas_id}', [OltasController::class, 'update']);

//rendelo


//Orvosoknak!
//felhasznalok (gyerek, szülő)

//lekérdezések
Route::get('/csalad', [CsaladController::class, 'getCsalad']);

//regisztráció
Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);
Route::post('/szulo', [SzuloController::class, 'store']);

