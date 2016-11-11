'use strict'
const Link = use('App/Model/Link')

class LinkController {

  * create () {
    // let user = request.authUser

  }

  * index () {
    // let link = link.findby('post_id', 'id')
    // let comments = link.comments()

    // find all links by specific user and order by created at
    // find all comments for that link? why is this here and in the comment controller?
  }

  * show () {}

  * update () {
    // let user = request.authUser
    //user.links().save(link)
  }

  * delete () {
    // let user = request.authUser
  }

}

module.exports = LinkController
