<?php

namespace Database\Factories;

use App\Models\Gyerek;
use App\Models\Oltas;
use App\Models\Orvos;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Beadas>
 */
class BeadasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'orvos_id'=> Orvos::all()->random()->orvos_id,
            'gyerek_id'=> Gyerek::all()->random()->gyerek_id,
            'tervezett_beadas'=> $this->faker->date(),
            'beadas_datuma'=> $this->faker->date(),
            'megjegyzes'=> $this->faker->text(),
            'oltas_id'=> Oltas::all()->random()->oltas_id,
        ];
    }
}
