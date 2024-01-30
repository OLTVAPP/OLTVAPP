<?php

namespace Database\Factories;

use App\Models\Orvos;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gyerek>
 */
class GyerekFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'orvos_id' => Orvos::all()->random()->felhasznalo_id,
            'vez_nev' => $this->faker->name(),
            'ker_nev' => $this->faker->name(),
            'lakcim_varos' => Str::random(10),
            'lakcim_irSzam' => $this->faker->randomNumber(1),
            'lakcim_utca' => $this->faker->randomNumber(1),
            'erzekenyseg' => Str::random(10),
            'szul_datum' => $this->faker->date(),
            'szul_hely' => Str::random(10),
        ];
    }
}
