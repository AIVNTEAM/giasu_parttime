<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$prefix = env('API_PREFIX');

$router->group(['prefix' => $prefix], function() use ($router) {

    $router->post('login', 'AuthController@login');
    $router->post('register', 'AuthController@register');
    $router->get('menus', 'MenuController@list');

});

$router->group([ 'middleware' => 'jwt.auth', 'prefix' => $prefix.'/auth' ],function() use ($router) {

          $router->get('members', 'UserController@members');
          $router->get('user', 'UserController@user');

});

//giao tiep voi angular
// $router->post('api/reg', 'ExampleController@register');
// $router->get('/get/menu/list', 'MenuController@list');
// $router->get('/get/menu/{id}', 'MenuController@detail');
// $router->post('/post/menu/save', 'MenuController@save');
// $router->put('/put/menu/update', 'MenuController@update');
// $router->delete('/delete/menu/{id}', 'MenuController@delete');
 
// $router->get('/get/type_menu/list', 'MenuTypeController@list');
