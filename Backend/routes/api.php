<?php

use App\Http\Controllers\Auth\RegisteredUserController;

use App\Http\Controllers\CsaladController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\OltasController;
use App\Http\Controllers\RendeloController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\OrvosController;
use App\Http\Controllers\SzuloController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:basic'])->group(function () {

}); 


Route::get('/id/{id}', [SzuloController::class, 'atmasol']);

Route::get('/bejelentkezes/{felhasznalo_nev}/{jelszo}', [FelhasznaloController::class, 'bejelentkezes']);
Route::get('/felhasznalo', [FelhasznaloController::class, 'index']);

Route::get('/bejelentkezes/{felhasnalo_nev}/{jelszo}', [FelhasznaloController::class, 'bejelentkezes']);


//Adminoknak!
Route::get('/felhasznalo_szulo', [FelhasznaloController::class, 'filterBySzulo']);
Route::get('/felhasznalo_orvos', [FelhasznaloController::class, 'filterByOrvos']);
Route::get('/felhasznalo_admin', [FelhasznaloController::class, 'filterByAdmin']);
Route::get('/felhasznalok', [FelhasznaloController::class, 'osszes_felhasznalo']);
Route::get('/felhasznalo_id', [FelhasznaloController::class, 'felhasznalo_id']);
Route::get('/felhasznalok_search', [SearchController::class, 'osszes_felhasznalo']);
Route::get('/felhasznalo_nev_search', [SearchController::class, 'felhasznalo_nev_szuro']);
Route::get('/search', [SearchController::class, 'search']);

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
Route::get('/keszlet/{orvos_id}', [OrvosController::class, 'keszlet']);
Route::get('/megsemmisitett_keszlet/{orvos_id}', [OrvosController::class, 'megsemmisitettKeszlet']);
Route::get('/betegek/{orvos_id}', [OrvosController::class, 'betegek']);
Route::get('/beteg/{gyerek_taj}', [OrvosController::class, 'beteg']);
Route::get('/oltas_nev', [OrvosController::class, 'oltasNev']);


Route::put('/beteg_modosit/{gyerek_taj}/{orvos_id}/{felhasznalo_email}', [OrvosController::class, 'betegModosit']);
Route::patch('/keszlet_megsemmisitese/{beszerzes_id}', [OrvosController::class, 'keszletMegsemmisitese']);
Route::patch('/keszlet_levon/{beszerzes_id}/{orvos_id}', [OrvosController::class, 'keszletLevon']);

Route::post('/uj_beteg/{orvos_id}/{felhasznalo_email}', [OrvosController::class, 'ujBeteg']);
Route::post('/uj_keszlet/{orvos_id}/{oltas_id}', [OrvosController::class, 'ujKeszlet']);
Route::post('/uj_beadas/{orvos_id}', [OrvosController::class, 'ujBeadas']);

//felhasznalok (gyerek, szülő)

//lekérdezések
Route::get('/csalad', [CsaladController::class, 'getCsalad']);

//regisztráció
Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);
Route::post('/szulo', [SzuloController::class, 'store']);











//tesztelés

Route::get('/felhasznalo_teszt/{join}/{}', [SearchController::class, 'aktiv_felhasznalok']);



