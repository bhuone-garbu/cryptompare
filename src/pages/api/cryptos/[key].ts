import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { key } = req.query;
  const data = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=${
      process.env.NOMICS_KEY
    }&ids=${(key as string).toUpperCase()}&convert=GBP`,
  ).then(res => res.json());

  res.statusCode = 200;
  res.json(data[0]);
};

export default handler;
