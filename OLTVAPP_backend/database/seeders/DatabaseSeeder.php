<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Felhasznalo::factory(9)->create();
        \App\Models\Admin::factory(9)->create();
        \App\Models\Rendelo::factory(9)->create();
        \App\Models\Orvos::factory(9)->create();
        \App\Models\Szulo::factory(9)->create();
        \App\Models\Gyerek::factory(9)->create();
        //\App\Models\Csalad::factory(9)->create();
        \App\Models\Oltas_tipus::factory(9)->create();
        \App\Models\Forgalmazo::factory(9)->create();
        \App\Models\Oltas::factory(9)->create();
        \App\Models\Beadas::factory(9)->create();
        \App\Models\Keszlet::factory(9)->create();
        \App\Models\Megsemisites::factory(1)->create(); //nem engedi duplikálni az adatokat
    }
}
