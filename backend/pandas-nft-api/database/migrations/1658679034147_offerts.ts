import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { OffertStatus } from '../../protocols'

export default class extends BaseSchema {
  protected tableName = 'offerts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.enum('status', Object.keys(OffertStatus)).defaultTo(OffertStatus.WAITING)
      table.decimal('value').unsigned().checkPositive().notNullable()
      table.integer('token_id')
        .unsigned()
        .references('id')
        .inTable('tokens')
        .onDelete('CASCADE')
        .notNullable()
      table.string('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
