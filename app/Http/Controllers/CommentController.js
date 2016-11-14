'use strict'
const Comment = use('App/Model/Comment')

class CommentController {

  * create (request, response) {
    let user = request.authUser
    let data = request.only('link_id', 'user_id', 'content')
    let comment = yield Comment.create(data)

    response.status(201).json(comment)
  }

  * index (request, response) {
    let data = request.only('user_id','link_id')
    let comments = yield Comment.query().where(data)

    response.json(comments)
  }

}

module.exports = CommentController
