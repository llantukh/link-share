'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  links () {
    return this.hasMany('App/Model/Link')
  }

  comments () {
    return this.hasMany('App/Model/Comment')
  }

}

module.exports = User
