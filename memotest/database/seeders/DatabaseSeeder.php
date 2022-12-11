<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Memotest::factory(2)->create();

        DB::table('memotests')->insert([
            'name' => 'Test',
            'urls' => json_encode(array("https://www.cippec.org/wp-content/uploads/2022/11/whatsapp-image-2022-11-23-at-12018-pm-1024x576.jpeg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/66C6/production/_120501362_1.jpg")),
        ]);
    }
}
