import * as z from 'zod';

export const donationSchema = z.object({
  types: z.string(),
  amount: z.number().min(20000),
});
export type IDonation = z.infer<typeof donationSchema>;
