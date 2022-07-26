import {isProduction} from "../lib/isProduction";

export const purchase_config = {
	price:120,
	endpoint: isProduction ? "https://www.payfast.co.za/eng/process" : "https://sandbox.payfast.co.za​/eng/process",
	merchant_id:process.env.NEXT_PUBLIC_MERCHANT_ID,
	merchant_key:process.env.NEXT_PUBLIC_MERCHANT_KEY,
	return_url:"",
	cancel_url:"",
	notify_url:"",
}