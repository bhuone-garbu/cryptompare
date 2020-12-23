import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { perPage = 20, pageNo = 1 } = req.query;
  const data = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_KEY}&per-page=${perPage}&page=${pageNo}&sort=rank&convert=GBP`,
  ).then(res => res.json());

  res.statusCode = 200;
  res.json(data);
};

export default handler;
