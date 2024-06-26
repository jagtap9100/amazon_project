import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../orm/db';

type ResponseData = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    let students: any = {}
    try {

        // students = await db.models.User.findAll();

        // students= await db.models.User.findByPk(1);
        students = await db.models.User.findOne({ where: { status: 'accepted' } });
        //   const  [students,created] = await db.models.User.findOrCreate({
        //         where: { empname: 'nishikant' },
        //         defaults: {
        //             empjob: 'Technical Lead JavaScript'
        //         }
        //     })

    } catch {
        console.log('error');

    }
    console.log(students);

    let response = {
        student: students

    }
    res.statusCode = 200;
    res.setHeader('content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(response));
}