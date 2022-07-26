import database from "./firebase";
import { onValue, ref, set, get, child } from "firebase/database";

export const addOrder = async (ticketData: any):Promise<boolean> => {
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
				resolve(true);
            })
            .catch((e) => {
                console.log({ e });
                reject(false);
            });
    });
};
