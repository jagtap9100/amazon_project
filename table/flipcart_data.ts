import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, Table } from '@sequelize/core/decorators-legacy';
import type { CreationOptional, NonAttribute } from "@sequelize/core";

const withDateNoTz = require('sequelize-date-no-tz-postgres');
@Table({ tableName: 'flipcart_data', timestamps: false })

export class flipcart_data extends Model<InferAttributes<flipcart_data>, InferCreationAttributes<flipcart_data>> {


  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  declare id: number | null;

  @Attribute(DataTypes.STRING(10))
  declare title: string;


  @Attribute(DataTypes.STRING(10))
  declare description: string;


  @Attribute(DataTypes.STRING(10))
  declare category: string;

  @Attribute(DataTypes.DATE)
  declare created_at: CreationOptional<Date>;

}
