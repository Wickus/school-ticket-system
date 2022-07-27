import database from "./firebase";
import { ref, get, child, set } from "firebase/database";
import { FirebasePayload } from "interfaces/firebase-payload";

export const updateOrderGotTickets = async (order_id: string, gotTicket: boolean): Promise<any> => {
    return new Promise((resolve, reject) => {
        const databaseLocation = "orders";
        get(child(ref(database), databaseLocation))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = [...snapshot.val()];

                    data.forEach((item: FirebasePayload, index) => {
                        if (item.m_payment_id === order_id) {
                            data[index].got_tickets = gotTicket;
                            data[index].payed = gotTicket;
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
