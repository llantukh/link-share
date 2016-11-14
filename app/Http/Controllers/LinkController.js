'use strict'
const Link = use('App/Model/Link')

class LinkController {

  * create () {
    let user = request.authUser
    let data = request.only('title', 'destination')


    let link = yield Link.create(data)


  }

  * index () {
    // let link = link.findby('post_id', 'id')
    // let comments = link.comments()

    // find all links by specific user and order by created at
    // find all comments for that link? why is this here and in the comment controller?
  }

}

module.exports = LinkController
