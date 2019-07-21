<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateViecsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viecs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tieude',100);
			$table->string('noidung',300);
			$table->bigInteger('monhoc_id');
			$table->bigInteger('lop_id');
			$table->bigInteger('tinh_id');
			$table->bigInteger('huyen_id');
			$table->bigInteger('xa_id');
			$table->tinyInteger('sobuoi');
			$table->date('ngaybatdau');
			$table->string('lichhoc',50);
			$table->bigInteger('mucluong');
			$table->tinyInteger('yeucaugioitinh');/*2: male; 3: female; 6: male/female */
			$table->string('yeucaukhac',50);
			$table->string('diachiday',100);
			$table->tinyInteger('status');
			$table->bigInteger('phhs_id');
			$table->dateTime('created_at');
			$table->dateTime('updated_at');
			$table->dateTime('deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('viecs');
    }
}
