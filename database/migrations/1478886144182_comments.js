'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.integer('post_id')
      table.foreign('post_id').references('posts.id')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
      table.string('content')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
