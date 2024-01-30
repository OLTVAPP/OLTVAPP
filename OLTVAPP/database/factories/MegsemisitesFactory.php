<?php

namespace Database\Factories;

use App\Models\Keszlet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Megsemisites>
 */
class MegsemisitesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'keszlet_id'=> Keszlet::all()->random()->keszlet_id,
            'megsemisitve'=> $this->faker->boolean(),
            'megsemisitve_d'=> $this->faker->date(),
        ];
    }
}
