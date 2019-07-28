<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Tinh;
use App\Huyen;
use App\Xa;

class DiachiController extends Controller
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
    public function getAllTinh()
    {
        try {
            $tinhs = Tinh::all();
            $res['success'] = true;
            $res['data'] = $tinhs;
            $res['count'] = $tinhs->count();
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function getHuyentheoTinh($id)
    {
        try {
            $huyens = Huyen::where('tinh_id',$id)
                          ->get();
            $res['success'] = true;
            $res['data'] = $huyens;
            $res['count'] = $huyens->count();
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }

    public function getXatheoHuyen($id)
    {
        try {
            $xas = Xa::where('huyen_id',$id)
                          ->get();
            $res['success'] = true;
            $res['data'] = $xas;
            $res['count'] = $xas->count();
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
}