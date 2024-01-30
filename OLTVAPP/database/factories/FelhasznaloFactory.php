<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use function Laravel\Prompts\text;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Felhasznalo>
 */
class FelhasznaloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'felhasznalo_nev' => $this->faker->name(),
            'jelszo' => Str::random(10),
            'szerepkor' => Str::random(1),
            'felhasznalo_email' => $this->faker->text(),
            'aktiv' => $this->faker->boolean(),
        ];
    }

    
}
