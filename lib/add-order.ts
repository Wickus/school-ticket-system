import database from "./firebase";
import { onValue, ref, set, get, child } from "firebase/database";
import { setCookie } from "./cookies";
import { FirebasePayload } from "interfaces/firebase-payload";

export const addOrder = async (ticketData: FirebasePayload):Promise<boolean> => {
    const databaseLocation = "orders";
    return new Promise((resolve, reject) => {
        get(child(ref(database), databaseLocation))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const newData = [...data.filter((item: any) => typeof item !== "undefined"), ...[ticketData]];
                    set(ref(database, databaseLocation), [...newData]);
                } else {
                    set(ref(database, databaseLocation), [...[ticketData]]);
                }

				setCookie("order-number", ticketData.m_payment_id, 6);

				resolve(true);
            })
            .catch((e) => {
                console.log({ e });
                reject(false);
            });
    });
};
