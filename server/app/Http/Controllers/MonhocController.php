<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Monhoc;

class MonhocController extends Controller
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
            $monhocs = Monhoc::all();
            $res['success'] = true;
            $res['data'] = $monhocs;
            $res['count'] = $monhocs->count();
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
            $monhoc = Monhoc::find($id);
            $res['success'] = true;
            $res['data'] = $monhoc;
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
            $tenmonhoc = $request->input('tenmonhoc');
            $ghichu = $request->input('ghichu');
           
            $save = Monhoc::create([
                'tenmonhoc'=> $tenmonhoc,
                'ghichu' => $ghichu
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
            $monhoc = Monhoc::find($req->input("id"));
            if ($monhoc) {
                $monhoc->tenmonhoc = $req->input('tenmonhoc');
                $monhoc->ghichu = $req->input('ghichu');
                $monhoc->save();
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