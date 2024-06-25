// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  try {


    let response = {
      title: 'abhi'
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }

}
