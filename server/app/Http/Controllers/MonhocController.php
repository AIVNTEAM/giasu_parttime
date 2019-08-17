<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\File;
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
            $tenanh = '';
            //xu ly thong tin upload - luu vao vi tri chi dinh
            if ($request->has('file')){
              $file = $request->file('file');
              $picName = $file->getClientOriginalName();
              $picName = uniqid() . '_' . $picName; //uniqid() for unique file name of image
              $destinationPath =  'upload' . DIRECTORY_SEPARATOR.'monhoc'.DIRECTORY_SEPARATOR.'avatar'.DIRECTORY_SEPARATOR;
              // $destinationPath = public_path($path); // upload path
              File::makeDirectory($destinationPath, 0777, true, true); //thiet lap cho pubic thu muc nay
              $file->move($destinationPath, $picName); //dua file vao vi tri chi dinh
              $tenanh = $destinationPath . '/' . $picName;
            }            
            
            //lay thong tin khac
            $data = json_decode($request->input('data'));
            // $res['file'] = $file->getClientOriginalName();
            // $res['data'] = $data;
            $tenmonhoc = $data->tenmonhoc;
            $ghichu = $data->ghichu;
           
            $save = Monhoc::create([
                'tenmonhoc'=> $tenmonhoc,
                'anhdaidien' => $tenanh,
                'ghichu' => $ghichu
            ]);
            $res['tenmonhoc'] = $tenmonhoc;
            $res['success'] = true;
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function update(Request $req)
    {   //lay thong tin khac
        $data = json_decode($req->input('data'));
        try {
            $monhoc = Monhoc::find($data->id);
            if ($monhoc) {
              //xu ly thong tin upload - luu vao vi tri chi dinh
              if ($req->has('file')){
                $file = $req->file('file');
                $picName = $file->getClientOriginalName();
                $picName = uniqid() . '_' . $picName; //uniqid() for unique file name of image
                $destinationPath =  'upload' . DIRECTORY_SEPARATOR.'monhoc'.DIRECTORY_SEPARATOR.'avatar'.DIRECTORY_SEPARATOR;
                // $destinationPath = public_path($path); // upload path
                File::makeDirectory($destinationPath, 0777, true, true); //thiet lap cho pubic thu muc nay
                $file->move($destinationPath, $picName); //dua file vao vi tri chi dinh
                //xoa file cu
                if (null !== $monhoc->anhdaidien)
                  unlink($monhoc->anhdaidien);
                $monhoc->anhdaidien = $destinationPath . '/' . $picName;
              }
           
            
              

              $monhoc->tenmonhoc = $data->tenmonhoc;
              $monhoc->ghichu = $data->ghichu;
              
              $monhoc->save();
              $res['data'] = $data;
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