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
            [
                'name' => 'Capitals of Europe',
            ],
            [
                'name' => 'Landscapes',
            ]
        ]);
        DB::table('images')->insert([
            ['memotestId' => 1, 'url' => "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"],
            ['memotestId' => 1, 'url' => "https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg"],
            ['memotestId' => 1, 'url' => "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/95/community-of-madrid.jpg?w=700&h=500&s=1"],
            ['memotestId' => 1, 'url' => "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"],
            [
                'memotestId' => 2,
                'url' => "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            ],
            [
                'memotestId' => 2,
                'url' => "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
            ],
            [
                'memotestId' => 2,
                'url' => "https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg"
            ],
            [
                'memotestId' => 2,
                'url' => "https://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg"
            ],

        ]);
    }
}