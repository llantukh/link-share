'use strict'
const Link = use('App/Model/Link')

class LinkController {

  * create (request, response) {
    let user = request.authUser
    let data = request.only('title', 'destination', 'user_id')
    data.user_id = user.id
    let link = yield Link.create(data)

    response.status(201).json(link)
  }

  * index (request, response) {
    let links = yield Link.query().select("*").orderBy("created_at","desc")

    response.json(links)
  }

}

module.exports = LinkController
