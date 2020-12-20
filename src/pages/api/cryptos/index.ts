import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const data = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_KEY}&per-page=100&page=1&sort=rank&convert=GBP`,
  ).then(res => res.json());

  res.statusCode = 200;
  res.json(data);
};

export default handler;
