<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateViecApprovesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viec_approves', function (Blueprint $table) {
            $table->bigIncrements('id');
			$table->bigInteger('viec_id');
			$table->bigInteger('admin_id');
			$table->string('note',20);
			$table->tinyInteger('status');
			$table->dateTime('created_at');
			$table->dateTime('updated_at');
			$table->dateTime('deleted_at');
            $table->bigInteger('created_user');
			$table->bigInteger('updated_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('viec_approves');
    }
}
