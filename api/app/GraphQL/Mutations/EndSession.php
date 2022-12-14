<?php

namespace App\GraphQL\Mutations;
use App\Models\Session;
use Illuminate\Support\Facades\DB;

final class EndSession
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
        $session = Session::find($args['id']);
        if($session) {
            $session->state = 1;
            $session->save();
        }
        // $session = DB::table('sessions')->where('id', $args['id']);
        // $session->update(array('state' => true));
        return $session;
    }
}
