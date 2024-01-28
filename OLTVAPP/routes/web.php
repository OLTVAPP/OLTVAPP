<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BeadasController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\ForgalmazoController;
use App\Http\Controllers\GyerekController;
use App\Http\Controllers\OltasController;
use App\Http\Controllers\OrvosController;
use App\Http\Controllers\SzuloController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



//felhasznalok

//Kiírja a felashználó adatait

//Hozzáad egy új felhasználót
//Route::post('api/felhasznalo', [FelhasznaloController::class, 'store']);

//Módosítja a kiválasztott felhasználó adatait
//Route::put('api/felhasznalo/{felhasznalo_id}', [FelhasznaloController::class, 'update']);
