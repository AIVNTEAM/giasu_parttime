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
}