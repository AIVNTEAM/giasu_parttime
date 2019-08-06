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

    $router->post('/login', 'AuthController@login');
    $router->post('register', 'AuthController@register');
    $router->get('menus', 'MenuController@list');

    $router->group(['prefix' => 'giasu'], function() use ($router){
    	$router->post('/register', 'GiasuController@dangky');
    });

    $router->group(['prefix' => 'viec'], function() use ($router){
    	$router->post('/dangviec', 'ViecController@dangviec');
    });

    $router->get('/tinh', 'DiachiController@getAllTinh');
    $router->get('/huyen/{id}', 'DiachiController@getHuyentheoTinh');
    $router->get('/xa/{id}', 'DiachiController@getXatheoHuyen');
    $router->get('/monhoc', 'MonhocController@list');
    $router->get('/lophoc', 'LopController@list');

    //admin router
    $router->group(['middleware' => 'jwt.auth', 'prefix' => 'admin'], function() use ($router) {
    	
    	//lop
    	$router->group(['prefix' => 'lop'], function () use ($router){
    		$router->get('/', 'LopController@list');
            $router->get('/{id}', 'LopController@detail');
            $router->post('/save', 'LopController@save');
            $router->put('/update', 'LopController@update');
            $router->delete('/{id}', 'LopController@delete');
    	});
    	
    	//monhoc
    	$router->group(['prefix' => 'monhoc'], function () use ($router){
    		$router->get('/', 'MonhocController@list');
            $router->get('/{id}', 'MonhocController@detail');
            $router->post('/save', 'MonhocController@save');
            $router->put('/update', 'MonhocController@update');
            $router->delete('/{id}', 'MonhocController@delete');
    	});

    	//viec
    	$router->group(['prefix' => 'viec'], function () use ($router){
    		$router->get('/', 'ViecController@list');
            $router->get('/{id}', 'ViecController@detail');
            $router->post('/save', 'ViecController@save');
            $router->put('/update', 'ViecController@update');
            $router->delete('/{id}', 'ViecController@delete');
    	});

    	//giasu
    	$router->group(['prefix' => 'giasu'], function () use ($router){
    		$router->get('/', 'GiasuController@list');
            $router->get('/{id}', 'GiasuController@detail');
            $router->post('/save', 'GiasuController@save');
            $router->put('/update', 'GiasuController@update');
            $router->delete('/{id}', 'GiasuController@delete');
    	});

    	//user
    	$router->group(['prefix' => 'user'], function () use ($router){
    		$router->get('/', 'UserController@list');
            $router->get('/{id}', 'UserController@detail');
            $router->post('/save', 'UserController@save');
            $router->put('/update', 'UserController@update');
            $router->delete('/{id}', 'UserController@delete');
    	});
    });
});

// $router->group([ 'middleware' => 'jwt.auth', 'prefix' => $prefix.'/auth' ],function() use ($router) {

// 	  $router->get('members', 'UserController@members');
// 	  $router->get('user', 'UserController@user');

// });

//giao tiep voi angular
// $router->post('api/reg', 'ExampleController@register');
// $router->get('/get/menu/list', 'MenuController@list');
// $router->get('/get/menu/{id}', 'MenuController@detail');
// $router->post('/post/menu/save', 'MenuController@save');
// $router->put('/put/menu/update', 'MenuController@update');
// $router->delete('/delete/menu/{id}', 'MenuController@delete');
 
// $router->get('/get/type_menu/list', 'MenuTypeController@list');
