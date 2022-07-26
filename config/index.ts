import { isProduction } from "../lib/isProduction";

export const purchase_config = {
    amount: "120", //https://sandbox.payfast.co.za​/eng/process
    endpoint: isProduction ? "https://www.payfast.co.za/eng/process" : "/api/notify",
    merchant_id: isProduction ? "14617749" : "10000100",
    merchant_key: isProduction ? "8qqk3qb815ebv" : "46f0cd694581a",
    return_url: "https://main.d3aedcwbi40w0w.amplifyapp.com/return",
    cancel_url: "https://main.d3aedcwbi40w0w.amplifyapp.com/cancel",
    notify_url: "https://main.d3aedcwbi40w0w.amplifyapp.com/notify",
};
