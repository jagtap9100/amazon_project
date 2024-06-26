
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../orm/db.js';

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

    try {

      houfy_channelmanager = await db.models.flipcart_data.findAll();

    // students= await db.models.User.findByPk(1);
    // houfy_channelmanager = await db.models.User.flipcart_data({ where: { status: 'accepted' } });
    //   const  [students,created] = await db.models.User.findOrCreate({
    //         where: { empname: 'nishikant' },
    //         defaults: {
    //             empjob: 'Technical Lead JavaScript'
    //         }
    //     })

    } catch {
      console.log('error');

    }


    let response: any = {
      houfy_channelmanager: houfy_channelmanager,
    }
    res.status(200).json(response)
  } catch (error) {
    console.error(error);
  }

}