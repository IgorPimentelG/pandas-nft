import { DateTime } from 'luxon'
import { OffertStatus } from './../../protocols'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Token from './Token'
import User from './User'

export default class Offert extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: OffertStatus

  @hasOne(() => Token)
  public token: HasOne<typeof Token>

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
