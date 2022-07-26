import database from "./firebase";
import { onValue, ref } from "firebase/database";

export const getOrderID = async ():Promise<number> => {
	return new Promise((resolve, reject)=>{
		const orders = ref(database, "orders");

		onValue(orders, (snapshot) => {
			if(snapshot.exists()){
				const data:[] = snapshot.val();
				resolve(data.length + 1)
			}else{
				resolve(1);
			}			
		});
	});
	
}