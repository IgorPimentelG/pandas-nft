import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Category } from '../../protocols'

export default class extends BaseSchema {
  protected tableName = 'tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').unique().notNullable()
      table.string('description').notNullable()
      table.enum('category', Object.keys(Category)).notNullable()
      table.string('image').unique().notNullable()
      table.string('creator_id')
        .references('id')
        .inTable('users')
        .notNullable()
        .onDelete('CASCADE')
      table.timestamp('expires_in', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
