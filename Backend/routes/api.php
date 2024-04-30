<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\RegisteredUserController;

use App\Http\Controllers\CsaladController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\OltasController;
use App\Http\Controllers\RendeloController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\GyerekController;
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
Route::get('/felhasznalo_szerep/{id}', [SearchController::class, 'kivalasztott_felhasznalo']);
Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);
Route::post('/admin', [AdminController::class, 'store']);
Route::post('/orvos', [OrvosController::class, 'store']);
Route::put('/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'update']);
Route::put('/admin/{felhasznalo_id}', [AdminController::class, 'update']);
Route::put('/orvos/{felhasznalo_id}', [OrvosController::class, 'update']);
Route::put('/szulo/{felhasznalo_id}', [SzuloController::class, 'update']);
Route::get('/felhasznalo_idKeres/{email}', [FelhasznaloController::class, 'idKeres']);
Route::get('/oltas_tipus_tabla', [OltasController::class, 'oltas_tipus_tabla']);
Route::get('/oltas_tipus/{oltas_tipus_id}', [OltasController::class, 'kivalasztott_oltas_tipus']);
Route::get('/beadando_tabla', [OltasController::class, 'beadando_tabla']);
Route::get('/beadando/{beadando_id}', [OltasController::class, 'kivalaszott_beadando']);
Route::get('/oltas_tipus', [OltasController::class, 'oltas_tipus']);
Route::post('/oltas_tipus', [OltasController::class, 'store_tipus']);
Route::post('/beadando', [OltasController::class, 'store_beadando']);
Route::get('/oltas_tabla', [OltasController::class, 'oltas_tabla']);
Route::get('/oltas/{id}', [OltasController::class, 'oltas_kivalasztott']);
Route::post('/oltas', [OltasController::class, 'store']);
Route::put('/oltas/{oltas_id}', [OltasController::class, 'update']);
Route::put('/oltas_tipus/{oltas_tipus_id}', [OltasController::class, 'update_tipus']);
Route::put('/beadando/{beadando_id}', [OltasController::class, 'update_beadando']);


//felhasznalok
Route::get('/felhasznalo', [FelhasznaloController::class, 'index']);
Route::get('/bejelentkezett_felhasznalo', [FelhasznaloController::class, 'bejelentkezett_felhasznalo']);
Route::get('/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'show']);

Route::get('/teszt', [FelhasznaloController::class, 'teszt']);

Route::get('/felhasznalo_keres/{felhasznalo_nev}/{felhasznalo_jelszo}', [FelhasznaloController::class, 'bejelentkezes']);




//oltas




//rendelo


//Orvosoknak!
Route::get('/keszlet/{orvos_id}', [OrvosController::class, 'keszlet']);
Route::get('/megsemmisitett_keszlet/{orvos_id}', [OrvosController::class, 'megsemmisitettKeszlet']);
Route::get('/betegek/{orvos_id}', [OrvosController::class, 'betegek']);
Route::get('/beteg/{gyerek_taj}', [OrvosController::class, 'beteg']);
Route::get('/oltas_nev', [OrvosController::class, 'oltasNev']);
Route::get('/oltas_tipus_nev', [OrvosController::class, 'oltasTipusNev']);
Route::get('/orvos/{orvos_id}', [OrvosController::class, 'orvos']);
Route::get('/szulo/{szulo_id}', [SzuloController::class, 'szulo']);

//készlet megjelenitése tipus_id alapján
Route::get('/keszlet_oltas_id/{orvos_id}/{tipus_id}', [OrvosController::class, 'keszletOltasId']);
Route::put('/beteg_modosit/{gyerek_taj}/{orvos_id}/{felhasznalo_email}', [OrvosController::class, 'betegModosit']);
Route::patch('/orvos_modosit/{orvos_id}', [OrvosController::class, 'orvosModosit']);
Route::patch('/keszlet_megsemmisitese/{beszerzes_id}', [OrvosController::class, 'keszletMegsemmisitese']);
Route::post('/uj_beteg/{orvos_id}/{felhasznalo_email}', [OrvosController::class, 'ujBeteg']);
Route::post('/uj_keszlet/{orvos_id}/{oltas_id}', [OrvosController::class, 'ujKeszlet']);
Route::post('/uj_beadas/{orvos_id}/{oltas_id}/{beadando_id}/{beszerzes_id}', [OrvosController::class, 'ujBeadas']);
Route::post('/uj_beadando/{gyerek_id}/{tipus_id}', [OrvosController::class, 'ujBeadando']);


//felhasznalok (gyerek, szülő)

//lekérdezések
Route::get('/csalad', [CsaladController::class, 'getCsalad']);

//regisztráció
Route::get('/felhasznalo_szulo_adatok', [FelhasznaloController::class, 'felhasznaloSzuloAdatok']);
Route::post('/felhasznalo', [FelhasznaloController::class, 'store']);
Route::post('/szulo', [SzuloController::class, 'store']);

Route::get('/oltas', [OltasController::class, 'index']);
Route::get('/gyerek', [GyerekController::class, 'gyerekIndex']);
Route::get('/orvos', [OrvosController::class, 'orvosShow']);



//tesztelés

Route::get('/felhasznalo_teszt/{join}/{}', [SearchController::class, 'aktiv_felhasznalok']);


Route::patch('/szulo_modosit/{szulo_id}', [SzuloController::class, 'szuloModosit']);