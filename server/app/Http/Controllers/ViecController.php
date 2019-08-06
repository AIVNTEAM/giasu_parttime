<?php
namespace App\Http\Controllers;
use Validator;
use App\Viec;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Routing\Controller as BaseController;
class ViecController extends BaseController 
{
    /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    private $request;
    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request) {
        $this->request = $request;
    }
   
   
    public function dangviec(Request $r)
    {        
        $v = Validator::make($r->all(), [
                    'tieude' => 'required',
                    'noidung' => 'required',
                    'monhoc_id'=> 'required',
                    'lop_id' => 'required',
                    'hoten' => 'required',
                    'sodienthoai' => 'required',
        ]);

        if ( $v->fails() ) 
                    return [ 'error' => $v->errors()->first() ];
                

        //tao profile
        $viec = Viec::create([
            'tieude' => $r->tieude, 
            'noidung' => $r->noidung, 
            'monhoc_id' => $r->monhoc_id, 
            'lop_id' => $r->lop_id,
            'tinh_id' => $r->tinh_id, 
            'huyen_id' => $r->huyen_id,
            'xa_id' => $r->xa_id,
            'sobuoi' => $r->sobuoi,
            'ngaybatdau' => $r->ngaybatdau,
            'lichhoc' => $r->lichhoc,
            'mucluong' => $r->mucluong,
            'yeucaugioitinh' => $r->gioitinh,
            'yeucaukhac' => $r->yeucaukhac,
            'diachiday' => $r->diachiday,
            'hoten' => $r->hoten,
            'sodienthoai' => $r->sodienthoai,            
            'status' => 0
        ]);
        
        return  [ 'msg' => 'Công việc đã được tạo thành công'];
    }

    public function list()
    {
        try {
            $viecs = Viec::all();
            $res['success'] = true;
            $res['data'] = $viecs;
            $res['count'] = $viecs->count();
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
            $viec = Viec::find($id);
            $res['success'] = true;
            $res['data'] = $viec;
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }

    public function save(Request $r)
    {
        try {
            
            $save = Viec::create([
                'tieude' => $r->tieude, 
                'noidung' => $r->noidung, 
                'monhoc_id' => $r->monhoc_id, 
                'lop_id' => $r->lop_id,
                'tinh_id' => $r->tinh_id, 
                'huyen_id' => $r->huyen_id,
                'xa_id' => $r->xa_id,
                'sobuoi' => $r->sobuoi,
                'ngaybatdau' => $r->ngaybatdau,
                'lichhoc' => $r->lichhoc,
                'mucluong' => $r->mucluong,
                'yeucaugioitinh' => $r->gioitinh,
                'yeucaukhac' => $r->yeucaukhac,
                'diachiday' => $r->diachiday,
                'hoten' => $r->hoten,
                'sodienthoai' => $r->sodienthoai,            
                'status' => $r->status
            ]);
            $res['success'] = true;
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function update(Request $r)
    {
        try {
            $viec = Viec::find($r->input("id"));
            if ($viec) {
                
                $viec->tieude = $r->tieude;
                $viec->noidung = $r->noidung;
                $viec->monhoc_id = $r->monhoc_id;
                $viec->lop_id = $r->lop_id;
                $viec->tinh_id = $r->tinh_id;
                $viec->huyen_id = $r->huyen_id;
                $viec->xa_id = $r->xa_id;
                $viec->sobuoi = $r->sobuoi;
                $viec->ngaybatdau = $r->ngaybatdau;
                $viec->lichhoc = $r->lichhoc;
                $viec->mucluong = $r->mucluong;
                $viec->yeucaugioitinh = $r->gioitinh;
                $viec->yeucaukhac = $r->yeucaukhac;
                $viec->diachiday = $r->diachiday;
                $viec->hoten = $r->hoten;
                $viec->sodienthoai = $r->sodienthoai;
                $viec->status = $r->status;

                $viec->save();
                $res['success'] = true;
                return response($res, 200);
            } else {
                $res['success'] = false;
                $res['message'] = 'Viec not found';
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
          $viec = Viec::find($id);
          if ($viec) {
              $viec->delete();
              $res['success'] = true;
              return response($res, 200);
          } else {
              $res['success'] = false;
              $res['message'] = 'Viec not found';
              return response($res, 200);
          }
      } catch (\Illuminate\Database\QueryException $ex) {
          $res['success'] = false;
          $res['message'] = $ex->getMessage();
          return response($res, 500);
      }
    }
}