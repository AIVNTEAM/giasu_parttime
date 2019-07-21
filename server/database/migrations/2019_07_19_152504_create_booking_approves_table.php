<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingApprovesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booking_approves', function (Blueprint $table) {
            $table->bigIncrements('id');
			$table->bigInteger('booking_id');
			$table->bigInteger('admin_id');
			$table->string('note',50);
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
        Schema::dropIfExists('booking_approves');
    }
}
