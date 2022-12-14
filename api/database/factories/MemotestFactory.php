<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class MemotestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'urls' => array('https://ichef.bbci.co.uk/news/640/cpsprodpb/66C6/production/_120501362_1.jpg', 'https://www.cippec.org/wp-content/uploads/2022/11/whatsapp-image-2022-11-23-at-12018-pm-1024x576.jpeg')
        ];
    }
}
