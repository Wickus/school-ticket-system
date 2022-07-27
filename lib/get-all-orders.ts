import database from "./firebase";
import { onValue, ref } from "firebase/database";

export const getOrders = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const orders = ref(database, "orders");

        onValue(orders, (snapshot) => {
            if (snapshot.exists()) {
                const order = [...snapshot.val()];

                resolve(order);
            } else {
                reject({ error: "eish" });
            }
        });
    });
};