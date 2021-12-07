<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
use Inertia\Inertia;

Route::get('login', function () {
    return Inertia::render('Auth/Login');
});
Route::get('dashboard', function () {
    return Inertia::render('Dashboard/Index');
});
Route::get('studying-students', function () {
    return Inertia::render('StudyingStudents/Index');
});
Route::get('studying-students/{id}', function () {
    return Inertia::render('StudyingStudents/Details');
});
Route::get('graduate-students', function () {
    return Inertia::render('GraduateStudents/Index');
});
Route::get('graduate-students/{id}', function () {
    return Inertia::render('GraduateStudents/Details');
});
Route::get('mail/inbox', function () {
    return Inertia::render('MailBox/Inbox');
});
Route::get('mail/inbox/{id}', function () {
    return Inertia::render('MailBox/InboxDetails');
});
Route::get('mail/sent', function () {
    return Inertia::render('MailBox/Sent');
});
Route::get('mail/sent/{id}', function () {
    return Inertia::render('MailBox/SentDetails');
});
Route::get('mail/draft', function () {
    return Inertia::render('MailBox/Draft');
});
Route::get('mail/trash', function () {
    return Inertia::render('MailBox/Trash');
});
