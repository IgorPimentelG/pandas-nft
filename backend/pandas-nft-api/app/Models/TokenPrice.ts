import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Token from './Token'

export default class TokenPrice extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public value: number

  @belongsTo(() => Token)
  public token: BelongsTo<typeof Token>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
