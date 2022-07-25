import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'token_prices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.decimal('value').unsigned().checkPositive().notNullable()
      table.integer('token_id')
        .unsigned()
        .references('id')
        .inTable('tokens')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamp('registered_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
