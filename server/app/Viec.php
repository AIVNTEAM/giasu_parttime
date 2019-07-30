<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class Viec extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tieude', 'noidung', 'monhoc_id', 'lop_id', 'tinh_id', 'huyen_id', 'xa_id', 'sobuoi', 'ngaybatdau', 'lichhoc', 'mucluong', 'yeucaugioitinh', 'yeucaukhac', 'diachiday', 'status', 'hoten', 'sodienthoai'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    
    public function monhoc()
    {
        return $this->belongsTo('App\Monhoc');
    }

    public function lop()
    {
        return $this->belongsTo('App\Lop');
    }
}
