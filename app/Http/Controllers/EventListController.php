<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventListController extends Controller
{
    public function index(){
        return view('eventlist');
    }
}
