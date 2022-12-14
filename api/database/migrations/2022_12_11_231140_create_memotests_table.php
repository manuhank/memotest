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
            $table->string('url')->unique();
            $table->bigInteger('memotestId')->unsigned();
            $table->foreign('memotestId')->references('id')->on('memotests')
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