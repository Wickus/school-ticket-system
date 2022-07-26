import database from "./firebase";
import { onValue, ref } from "firebase/database";

export const getOrder = async (order_id:string):Promise<any> => {
	return new Promise((resolve, reject)=>{
		const orders = ref(database, "orders");

		onValue(orders, (snapshot) => {
			if(snapshot.exists()){
				const order = [...snapshot.val() ]
				const selectedOrder = order.filter((item:any)=>{
					const {m_payment_id} = item
					return m_payment_id == order_id;
				})[0]

				resolve(selectedOrder)
			}else{
				reject({error:"eish"})
			}			
		});
	});
	
}