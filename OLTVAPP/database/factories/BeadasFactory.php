<?php

namespace Database\Factories;

use App\Models\Gyerek;
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
            'tervezett_beadas',
            'beadas_datuma',
            'megjegyzes',
            'oltas_id'
        ];
    }
}
