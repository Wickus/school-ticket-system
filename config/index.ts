import { isProduction } from "../lib/isProduction";

export const purchase_config = {
    amount: "120",
    endpoint: isProduction ? "https://www.payfast.co.za/eng/process" : "https://sandbox.payfast.co.za​/eng/process", //https://sandbox.payfast.co.za​/eng/process
    merchant_id: isProduction ? "14617749" : "10000100",
    merchant_key: isProduction ? "8qqk3qb815ebv" : "46f0cd694581a",
    return_url: "https://main.d3aedcwbi40w0w.amplifyapp.com/success",
    cancel_url: "https://main.d3aedcwbi40w0w.amplifyapp.com/canceled",
    notify_url: "https://main.d3aedcwbi40w0w.amplifyapp.com/api/notify",
};
