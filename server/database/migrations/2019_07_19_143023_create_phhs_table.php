<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhhsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phhs', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
			$table->string('diachi',80);
			$table->bigInteger('tinh_id');
			$table->bigInteger('huyen_id');
			$table->bigInteger('xa_id');
            $table->string('motabanthan',80);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phhs');
    }
}
