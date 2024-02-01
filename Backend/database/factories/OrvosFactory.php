<?php

namespace Database\Factories;

use App\Models\Rendelo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orvos>
 */
class OrvosFactory extends Factory
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
            'rendelo_id'=> Rendelo::all()->random()->rendelo_id,
            'tel_szam' => $this->faker->randomNumber(1,10),
            'publikus_email' => $this->faker->email(),
        ];
    }
}
