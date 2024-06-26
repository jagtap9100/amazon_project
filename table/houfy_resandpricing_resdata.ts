import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, Table } from '@sequelize/core/decorators-legacy';
const withDateNoTz = require('sequelize-date-no-tz-postgres');
@Table({ tableName: 'houfy_resandpricing_resdata', timestamps: false })

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

  @Attribute(DataTypes.STRING)
  declare resid: string | null;

  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  declare listing_id: number | null;

  @Attribute(DataTypes.DATEONLY)
  @PrimaryKey
  declare checkindate: Date | null;

  @Attribute(DataTypes.DATEONLY)
  declare checkoutdate: Date | null;

  @Attribute(DataTypes.STRING)
  @PrimaryKey
  declare importurlid: string | null;

}
