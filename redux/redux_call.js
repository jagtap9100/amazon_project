
import config from "../config/config.json";
var querystring = require("querystring");
import axios from 'axios';

export async function getproductdetails() {
  let res = await axios.get(
    config.apiurl2 + "channel/getalldetails");
  return res.data;
}
export async function search_product(category) {
  var data = {
    category: category,
  };
  var formdata = querystring.stringify(data);
  let res = await axios.post(
    config.apiurl2 + "channel/search",
    formdata,
  );
  return res.data;
}


