import database from "./firebase";
import { onValue, ref } from "firebase/database";

export const getOrder = async (search: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const orders = ref(database, "orders");

        onValue(orders, (snapshot) => {
            if (snapshot.exists()) {
                const order = [...snapshot.val()];
                const selectedOrder = order.filter((item: any) => {
                    const { cell_number, email_address, canceled } = item;
                    return (email_address === search || cell_number === search) && !canceled;
                });

                resolve(selectedOrder);
            } else {
                reject({ error: "eish" });
            }
        });
    });
};
