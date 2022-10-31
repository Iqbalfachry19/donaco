import type { NextApiRequest, NextApiResponse } from 'next';
const midtransClient = require('midtrans-client');
const { v4: uuidv4 } = require('uuid');

type Data = {};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { items, email, total } = req.body;
  console.log(items);
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
  });

  const transformedItemsImage = items.map((item: any) => item.image);

  const transformedItems = items.map((item: any) => ({
    id: item.id,
    price: item.price,
    quantity: 1,
    name: item.title,
    brand: 'Donaco',
    category: item.category,
    merchant_name: 'Donaco',
  }));
  let parameter = {
    transaction_details: {
      order_id: uuidv4(),
      gross_amount: total,
    },
    item_details: transformedItems,
    customer_details: {
      email,
    },
    credit_card: {
      secure: true,
    },
    callbacks: {
      finish: 'https://donaco.vercel.app',
    },
  };

  snap
    .createTransaction(parameter)
    .then((transaction: any) => {
      let transactionToken = transaction.token;
      let redirectUrl = transaction.redirect_url;
      console.log('transactionToken:', transactionToken);

      res.status(200).json({
        token: transactionToken,
        redirect: redirectUrl,
        orderId: parameter.transaction_details.order_id,
        amount: parameter.transaction_details.gross_amount,
        images: transformedItemsImage,
      });
    })
    .catch((err: any) => {
      res.status(400).send(`Error: ${err.message}`);
    });
}
