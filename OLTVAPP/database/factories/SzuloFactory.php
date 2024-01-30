<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Szulo>
 */
class SzuloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'vez_nev' => $this->faker->name(),
            'ker_nev' => $this->faker->name(),
            'lakcim_varos' => Str::random(10),
            'lakcim_irSzam' => $this->faker->randomNumber(1),
            'lakcim_utca' => $this->faker->randomNumber(1),
        ];
    }
}
