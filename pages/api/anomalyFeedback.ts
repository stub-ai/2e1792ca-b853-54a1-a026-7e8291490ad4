import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  feedback: string,
  anomalyType: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO: Store the feedback in your database
  console.log(req.body.feedback);
  console.log(req.body.anomalyType);

  // TODO: Use the feedback to improve the algorithm

  res.status(200).json({ feedback: 'Received', anomalyType: req.body.anomalyType })
}