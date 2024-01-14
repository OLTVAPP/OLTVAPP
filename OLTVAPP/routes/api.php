<?php

use Illuminate\Http\Request;
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
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//oltvapp táblák indexei
Route::get('api/admin', [AdminController::class, 'adminIndex']);
Route::get('api/beadas', [BeadasController::class, 'beadasIndex']);
Route::get('api/felhasznalo', [FelhasznaloController::class, 'felhasznaloIndex']);
Route::get('api/forgalmazo', [ForgalmazoController::class, 'forgalmazoIndex']);
Route::get('api/gyerek', [GyerekController::class, 'gyerekIndex']);
Route::get('api/oltas', [OltasController::class, 'oltasIndex']);
Route::get('api/orvos', [OrvosController::class, 'orvosIndex']);
Route::get('api/szulo', [SzuloController::class, 'szuloIndex']);
