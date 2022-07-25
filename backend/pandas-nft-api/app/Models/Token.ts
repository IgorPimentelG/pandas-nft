import { Category } from '../../protocols'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import TokenPrice from './TokenPrice'

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public category: Category

  @column()
  public image: string

  @hasOne(() => User)
  public creator: HasOne<typeof User>

  @belongsTo(() => User)
  public owner: BelongsTo<typeof User>

  @hasMany(() => TokenPrice, {
    foreignKey: 'token'
  })
  public prices: HasMany<typeof TokenPrice>

  @column.dateTime()
  public expires_in: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
