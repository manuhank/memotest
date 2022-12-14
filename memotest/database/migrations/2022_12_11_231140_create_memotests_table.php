<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memotests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->bigInteger('memotest_id')->unsigned();
            $table->foreign('memotest_id')->references('id')->on('memotests')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memotests');
        Schema::dropIfExists('images');
    }
};