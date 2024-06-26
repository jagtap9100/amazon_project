// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
export default function handler(req, res) {

  try {

    // let name1 = req.query.name;  //get 
    // let address = req.body.address;  //post param passing though postman using raw passing json
    let fname = req.body.fname;
    let lname = req.body.lname;

    if (fname == 'abhishek') {
      fname = 'abhishek madhukar jagtap';
    }
    let response = {
      fname: fname,
      lname: lname,
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }

}
