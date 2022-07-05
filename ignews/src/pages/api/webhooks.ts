import { NextApiRequest, NextApiResponse } from "next";

export default async function webHooks(req: NextApiRequest, res: NextApiResponse) {
  console.log('recebido')

  res.status(200).json({ok: true})
}
