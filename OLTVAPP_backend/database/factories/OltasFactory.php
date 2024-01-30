<?php

namespace Database\Factories;

use App\Models\Forgalmazo;
use App\Models\Oltas_tipus;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Oltas>
 */
class OltasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tipus_id'=> Oltas_tipus::all()->random()->tipus_id,
            'forgalmazo_id'=>Forgalmazo::all()->random()->forgalmazo_id,
            'szuksegessege'=> Str::random(10),
            'mellek_hatasa'=>Str::random(10),
            'adagolas'=>Str::random(10),
            'receptre'=> $this->faker->boolean(),
        ];
    }
}
