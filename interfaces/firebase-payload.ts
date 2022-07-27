export interface FirebasePayload {
    m_payment_id: string;
    item_name: string;
    name_first:string;
    name_last:string;
    cell_number:string;
    email_address:string;
    quantity: string;
    payed: boolean;
    total: number;
    canceled: boolean;
	got_tickets:boolean;
}
