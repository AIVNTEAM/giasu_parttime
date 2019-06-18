<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected function buildFailedValidationResponse(Request $request, array $errors)
    {
    	//400: Bad request - yêu cầu này bị lỗi:
    	//401: Unauthorized - Không có quyền:
    	//402: Payment Require - Yêu cầu trả tiền
    	//403: Forbidden - Bị cấm truy nhập:
    	//404: Not found - không tìm thấy
    	//5xx - Server Error - Lỗi máy chủ
        return response(["success"=> false , "message" => $errors], 401);
    }
}
