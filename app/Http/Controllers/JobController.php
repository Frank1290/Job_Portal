<?php

namespace App\Http\Controllers;
 use App\Job;

use Illuminate\Http\Request;

class JobController extends Controller
{
    public function getAll(){
        $jobs = Job::get()->toJson(JSON_PRETTY_PRINT);
        return response($jobs, 200);
    }
    public function addJob(Request $req){
    

        $job = new Job;
        $job->company=$req->company;
        $job->title=$req->title;
        $job->experience=$req->experience;
        $job->description=$req->description;
        $job->roles=$req->roles;
        $job->skills=$req->skills;
        $job->salary_range=$req->salary_range;
        $job->post=$req->post;
        $job->qualification=$req->qualification;
        $job->search_key=$req->search_key;
        $job->type=$req->type;
        $job->location=$req->location;
        $job->apply_link=$req->apply_link;
        $job->email=$req->email;
        $job->save();
        return response($job, 200);
        
    }
}
