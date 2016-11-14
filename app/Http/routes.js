'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Routes for users:
Route.post('/users', 'UserController.register')
Route.post('/users','UserController.login')

// Routes for links/posts:
Route.post('/links','LinkController.create').middleware('auth')
Route.get('/links/:id','LinkController.index')

// Routes for comments:
Route.post('/comments','CommentController.create').middleware('auth')
Route.get('/comments','CommentController.index')
