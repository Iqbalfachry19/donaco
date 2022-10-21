import * as z from 'zod';

export const donationSchema = z.object({
  types: z.string(),
  amount: z.number().min(20000),

  amountCrypto: z.number().min(0.01),
});

export type IDonation = z.infer<typeof donationSchema>;
