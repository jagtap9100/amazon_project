import { Sequelize } from "@sequelize/core";
import { User } from "../table/houfy_resandpricing_resdata.ts";
import { flipcart_data } from "../table/flipcart_data.ts";

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    models: [
      User,
      flipcart_data]
    ,
    dialect: "mysql",
    logging: function (str) {
      console.log(str);
    },
  }
);
export default sequelize;