import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  feedback: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO: Store the feedback in your database
  console.log(req.body.feedback);

  res.status(200).json({ feedback: 'Received' })
}