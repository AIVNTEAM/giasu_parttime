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
            'role' => $r->role
            // 'role' => $r['role']
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
}