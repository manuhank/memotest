<?php

namespace App\GraphQL\Mutations;

use App\Models\Session;

final class EndSession
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $session = Session::find($args['id']);
        if ($session) {
            $session->state = 1;
            $session->retries = $args['retries'];
            $session->save();
        }

        return $session;
    }
}