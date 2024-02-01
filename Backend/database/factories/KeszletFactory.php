<?php

namespace Database\Factories;

use App\Models\Oltas;
use App\Models\Orvos;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Keszlet>
 */
class KeszletFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'oltas_id'=> Oltas::all()->random()->oltas_id,
            'orvos_id'=> Orvos::all()->random()->felhasznalo_id,
            'darab' => $this->faker->randomNumber(1,100),
            'beszerzes_datuma' => $this->faker->date(),
            'lejarati_datuma' => $this->faker->date(),
        ];
    }
}
