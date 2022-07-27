export interface PayFastPayload {
    merchant_id: string;
    merchant_key: string;
    return_url: string;
    cancel_url: string;
    notify_url: string;
    name_first: string;
    name_last: string;
    email_address: string;
    cell_number: string;
    m_payment_id: string;
    amount: string;
    item_name: string;
    item_description: string;
    payment_status?: "CANCELLED" | "COMPLETE";
}
