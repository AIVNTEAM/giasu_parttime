<?php
namespace App\Http\Controllers;
use Validator;
use App\User;
use App\Giasu;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Routing\Controller as BaseController;
class GiasuController extends BaseController 
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
   
   
    public function dangky(Request $r)
    {        
        $v = Validator::make($r->all(), [
                    'name' => 'required',
                    'email' => 'required|email|unique:users,email',
                    'password'=> 'required',
                    'confirm_password' => 'required|same:password'
        ]);

        if ( $v->fails() ) 
                    return [ 'error' => $v->errors()->first() ];
        
        $r->merge( ['password' => app('hash')->make($r->password) ]);
        
        $user = User::create([
            'username' => $r->username,
            // 'username' => $r['username'],
            'password' => $r->password,
            // 'password' => $r['password'],
            'name' => $r->name,
            // 'name' => $r['name'],
            'email' => $r->email,
            // 'email' => $r['email'],
            'role' => $r->role,
            // 'role' => $r['role'],
            // 'status' = 0
        ]);

        //tao profile
        $giasu = Giasu::create([
            'ngaysinh' => $r->ngaysinh, 
            'gioitinh' => $r->gioitinh, 
            'socmnd' => $r->socmnd, 
            'anhcmnd' => 'cmnd.jpg',
            'diachicutru' => $r->diachicutru, 
            'sodienthoai' => $r->sodienthoai,
            'user_id' => $user->id,
            'anhdaidien' => 'avatar.png',
            'trinhdo_id' => 1,
            'anhbangcap' => 'bangcap.jpg',
            'status' => 0

        ]);

        return  [ 'msg' => 'User Succefully Registered'];
    }

    public function list()
    {
        try {
            $giasus = Giasu::with('user')->get();
            $res['success'] = true;
            $res['data'] = $giasus;
            $res['count'] = $giasus->count();
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
            $giasu = Giasu::with('user')->find($id);
            $res['success'] = true;
            $res['data'] = $giasu;
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
            $giasu = Giasu::find($r->input("id"));
            if ($giasu) {
                
                // $viec->tieude = $r->tieude;
                // $viec->noidung = $r->noidung;
                // $viec->monhoc_id = $r->monhoc_id;
                // $viec->lop_id = $r->lop_id;
                // $viec->tinh_id = $r->tinh_id;
                // $viec->huyen_id = $r->huyen_id;
                // $viec->xa_id = $r->xa_id;
                // $viec->sobuoi = $r->sobuoi;
                // $viec->ngaybatdau = $r->ngaybatdau;
                // $viec->lichhoc = $r->lichhoc;
                // $viec->mucluong = $r->mucluong;
                // $viec->yeucaugioitinh = $r->gioitinh;
                // $viec->yeucaukhac = $r->yeucaukhac;
                // $viec->diachiday = $r->diachiday;
                // $viec->hoten = $r->hoten;
                // $viec->sodienthoai = $r->sodienthoai;
                // $giasu->user->status = (int) $r->input("user.status");

                //cap nhat tren table user
                $user = $giasu->user;
                $user->status = (int) $r->input("user.status");
                $user->save();
                // $giasu->save();
                $res['success'] = $r->user;
                return response($res, 200);
            } else {
                $res['success'] = false;
                $res['message'] = 'Giasu not found';
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