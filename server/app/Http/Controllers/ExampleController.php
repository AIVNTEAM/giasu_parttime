<?php
use Illuminate\Http\Request;
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function register(Request $request){
        // console.log($request);
        //$users = $request;
        return response()->json('Them thanh cong');
    }
    //
}
