import { Novu } from '@novu/node';
import { verifySignature } from '@upstash/qstash/nextjs';
import assert from 'assert';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, x, y } = req.body as {
      userId: string;
      x: number;
      y: number;
    };

    const novuApiKey = process.env.NOVU_API_KEY;
    assert(novuApiKey, 'NOVU_API_KEY is not defined');
    const novu = new Novu(novuApiKey);

    const rng = Math.random();
    const success = rng > 0.5;

    if (success) {
      await novu.trigger('add.success', {
        to: {
          subscriberId: userId,
        },
        payload: {
          x,
          y,
          result: x + y,
        },
      });
      return res.send('ok');
    }

    if (!success) {
      const error = 'simulated error';
      await novu.trigger('add.failure', {
        to: {
          subscriberId: userId,
        },
        payload: {
          x,
          y,
          error,
        },
      });
      return res.status(500).send(error);
    }
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  } finally {
    res.end();
  }
}

export default verifySignature(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
