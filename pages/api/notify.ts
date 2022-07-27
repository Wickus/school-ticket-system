// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// Functions
import { updateOrderPayment } from "../../lib/update-order-payment";
// Interfaces
import { PayFastPayload } from "../../interfaces/payfast-payload";

type Data = {
    status: 200;
    [key: string]: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data: PayFastPayload = JSON.parse(JSON.stringify(req.body));
    const { m_payment_id, payment_status } = data;
	const isComplete = payment_status === "COMPLETE";

    await updateOrderPayment(m_payment_id, isComplete);

    res.status(200).json({ status: 200, ...{ m_payment_id } });
}
