import database from "./firebase";
import { ref, get, child, set } from "firebase/database";

export const updateOrderPayment = async (order_id: string, isComplete: boolean): Promise<any> => {
    return new Promise((resolve, reject) => {
        const databaseLocation = "orders";
        get(child(ref(database), databaseLocation))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = [...snapshot.val()];

                    data.forEach((item, index) => {
                        if (item.m_payment_id === order_id) {
                            data[index].payed = isComplete;
                            data[index].canceled = !isComplete;
                        }
                    });

                    set(ref(database, databaseLocation), data);

                    resolve(true);
                } else {
                    reject(false);
                }
            })
            .catch((e) => {
                console.log({ e });
                reject(false);
            });
    });
};
