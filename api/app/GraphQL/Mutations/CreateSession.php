<?php

namespace App\GraphQL\Mutations;

use App\Models\Image;
use App\Models\Session;

final class CreateSession
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $numberOfPairs = Image::where('memotestId', $args["memotestId"])->count();
        $session = Session::create([
            'memotestId' => $args["memotestId"],
            'numberOfPairs' => $numberOfPairs,
        ]);

        return $session->fresh();
    }
}