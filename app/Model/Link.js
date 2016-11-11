'use strict'

const Lucid = use('Lucid')

class Link extends Lucid {

  user () {
    return this.belongsTo('App/Model/User')
  }

  comments () {
    return this.hasMany('App/Model/Comment')
  }

}

module.exports = Link
