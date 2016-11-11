'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {

  user () {
    return this.belongsTo('App/Model/User')
  }

  link () {
    return this.belongsTo('App/Model/Link')
  }

}

module.exports = Comment
