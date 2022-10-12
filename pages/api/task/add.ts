import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@upstash/qstash';
import assert from 'assert';
export type AddRequest = {
  userId: string;
  x: number;
  y: number;
};
export type AddResponse = {
  taskId: string;
};
export type ErrorResponse = {
  error: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const qstashToken = process.env.QSTASH_TOKEN;
    assert(qstashToken, 'QSTASH_TOKEN is not defined');

    const qstash = new Client({
      token: qstashToken,
    });

    const { userId, x, y } = req.body as {
      userId: string;
      x: number;
      y: number;
    };

    await qstash.publishJSON({
      url: `https://${process.env.VERCEL_URL}/api/task/process`,
      retries: 1,
      body: {
        userId,
        x,
        y,
      },
    });

    res.status(201);
    res.send('OK');
    return;
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  } finally {
    res.end();
  }
}
