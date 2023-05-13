<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee', function (Blueprint $table) {
            $table->id();
            $table->string('firstName',50);
            $table->string('lastName',50);
            $table->string('email',50)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->date('dob')->nullable();
            $table->enum('gender',['male','female','other'])->nullable();
            $table->string('education');
            $table->string('company');
            $table->integer('experience');
            $table->integer('package');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee');
    }
};
