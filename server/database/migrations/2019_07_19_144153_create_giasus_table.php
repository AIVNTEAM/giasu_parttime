<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGiasusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('giasus', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->date('ngaysinh');
			$table->tinyInteger('goitinh');/* 2: male; 3: female*/
			$table->string('socmnd',15);
			$table->string('anhdaidien',200);
			$table->string('anhcmnd',200);
			$table->string('anhbangcap',200);
			$table->string('diachicutru',200);
			$table->string('sodienthoai',15);
			$table->tinyInteger('status');
			$table->dateTime('created_at');
			$table->dateTime('updated_at');
			$table->bigInteger('trinhdo_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('giasus');
    }
}
