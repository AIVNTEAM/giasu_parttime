<?php
namespace App\Http\Controllers;
use Validator;
use App\User;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Routing\Controller as BaseController;

class UserController extends BaseController 
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
   
    
    public function list()
    {
        try {
            $users = User::where('role', 1)->get();
            $res['success'] = true;
            $res['data'] = $users;
            $res['count'] = $users->count();
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
            $user = User::find($id);
            $res['success'] = true;
            $res['data'] = $user;
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
            $save = User::create([
                'username' => $r->username, 
                'name' => $r->name, 
                'password' => $r->password, 
                'email' => $r->email, 
                'role' => $r->role,                          
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