
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../orm/db';

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let houfy_channelmanager: any = null;

  try {
    let msg: string = 'null';
    let category = req.body.category;
    try {
      houfy_channelmanager = await db.models.flipcart_data.findOne(
        {
          where:
            { category: category }
        }
      );
    } catch {
      console.log('error');
    }


    let response: any = {
      data: houfy_channelmanager,
    }
    res.status(200).json(response)
  } catch (error) {
    console.error(error);
  }

}