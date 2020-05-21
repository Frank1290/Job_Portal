<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('company');
            $table->string('title');
            $table->float('experience');
            $table->string('description');
            $table->string('roles');
            $table->string('skills');
            $table->string('salary_range');
            $table->string('post');
            $table->string('qualification');
            $table->string('search_key');
            $table->string('type');
            $table->string('location');
            $table->string('apply_link');
            $table->string('email');
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
        Schema::dropIfExists('jobs');
    }
}
