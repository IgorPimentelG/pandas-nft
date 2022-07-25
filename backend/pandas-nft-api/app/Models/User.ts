import Hash from '@ioc:Adonis/Core/Hash'
import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { BaseModel, beforeCreate, beforeSave, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Token from './Token'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public points: number

  @column()
  public wallet: string

  @column()
  public image: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @hasMany(() => Token, {
    foreignKey: 'owner'
  })
  public tokens: HasMany<typeof Token>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async setUUID (user: User) {
    user.id = uuid()
  }

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
