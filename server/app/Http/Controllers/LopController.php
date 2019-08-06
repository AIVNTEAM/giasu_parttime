<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Lop;

class LopController extends Controller
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
    public function list()
    {
        try {
            $lops = Lop::all();
            $res['success'] = true;
            $res['data'] = $lops;
            $res['count'] = $lops->count();
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }

    public function detail($id)
    {
        try {
            $lop = Lop::find($id);
            $res['success'] = true;
            $res['data'] = $lop;
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    
    public function save(Request $request)
    {
        try {
            $tenlop = $request->input('tenlop');
           
            $save = Lop::create([
                'tenlop'=> $tenlop
            ]);
            $res['success'] = true;
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function update(Request $req)
    {
        try {
            $lop = Lop::find($req->input("id"));
            if ($lop) {
                $lop->tenlop = $req->input('tenlop');
                $lop->save();
                $res['success'] = true;
                return response($res, 200);
            } else {
                $res['success'] = false;
                $res['message'] = 'Monhoc not found';
                return response($res, 200);
            }
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function delete($id)
    {
      try {
          $monhoc = Monhoc::find($id);
          if ($monhoc) {
              $monhoc->delete();
              $res['success'] = true;
              return response($res, 200);
          } else {
              $res['success'] = false;
              $res['message'] = 'Monhoc not found';
              return response($res, 200);
          }
      } catch (\Illuminate\Database\QueryException $ex) {
          $res['success'] = false;
          $res['message'] = $ex->getMessage();
          return response($res, 500);
      }
    }
}