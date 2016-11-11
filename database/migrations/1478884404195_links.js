'use strict'

const Schema = use('Schema')

class LinksTableSchema extends Schema {

  up () {
    this.create('links', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
      table.string('title')
      table.string('destination')
    })
  }

  down () {
    this.drop('links')
  }

}

module.exports = LinksTableSchema
