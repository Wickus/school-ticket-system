// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { updateOrderPayment } from "../../lib/update-order-payment";

type Data = {
    status: 200;
    [key: string]: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = JSON.parse(JSON.stringify(req.body));
    const { m_payment_id } = data;

    await updateOrderPayment(m_payment_id);

	res.status(200).json({ status: 200, ...{m_payment_id} });
}
