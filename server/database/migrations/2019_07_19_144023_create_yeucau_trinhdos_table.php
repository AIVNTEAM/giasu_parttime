<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateYeucauTrinhdosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yeucau_trinhdos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('viec_id');
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
        Schema::dropIfExists('yeucau_trinhdos');
    }
}
