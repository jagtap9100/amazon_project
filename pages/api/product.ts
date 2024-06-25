
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {


  try {
    let msg: string = 'null';




    let response: any = {
      msg: msg,
    }
    res.status(200).json(response)
  } catch (error) {
    console.error(error);
  }

}