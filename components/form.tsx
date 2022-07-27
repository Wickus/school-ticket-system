import { useRef, useState } from "react";
import { purchase_config } from "config";
import { addOrder } from "@/lib/add-order";
import { getOrderID } from "@/lib/get-order-id";

const FormSection: React.FC = () => {
    const [state, setState] = useState({
        expanded: false,
    });
    const button = "bg-red-500/70 shadow-lg shadow-red-500/40 text-white p-[1rem_2rem] rounded-full";
    const { expanded } = state;

    const toggleBookingForm = () => {
        setState({ ...state, expanded: !state.expanded });
    };

    return (
        <div className="fixed bottom-0 z-10 left-1/2 transform -translate-x-1/2 w-full block max-w-[420px]">
            {!expanded ? (
                <div className="flex items-center justify-between h-28 rounded-tl-3xl rounded-tr-3xl bg-white shadow-2xl shadow-black p-5">
                    <p>RSVP vir die konsert</p>
                    <button type="button" className={button} onClick={toggleBookingForm}>
                        Bespreek Kaartjies
                    </button>
                </div>
            ) : (
                <From toggleForm={toggleBookingForm} />
            )}
        </div>
    );
};

const From: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
    const { endpoint, cancel_url, notify_url, return_url, merchant_id, merchant_key, amount } = purchase_config;
    const form = useRef<HTMLFormElement>(null);
    const [state, setState] = useState<{
        loading: boolean;
        formData: { [key: string]: string };
    }>({
        loading: false,
        formData: {
            merchant_id,
            merchant_key,
            return_url,
            cancel_url,
            notify_url,
            name_first: "",
            name_last: "",
            email_address: "",
            cell_number: "",
            m_payment_id: "",
            amount,
            item_name: "",
            item_description: "",
        },
    });
    const [addedToFireBase, setAddedToFireBase] = useState(false);

	const button = "bg-red-500/70 shadow-lg shadow-red-500/40 text-white p-[1rem_2rem] rounded-full";
    const input = "border-[1px] border-gray-200 w-full p-[.5rem_1rem] mb-2 rounded-xl";
	
    const addToFirebase = () => {
		setState({...state, loading:true});
        const { amount, item_description, name_first, name_last, cell_number, email_address } = state.formData;
        const totalPrice = parseFloat(amount) * parseInt(item_description);

        getOrderID()
            .then((response: number) => {
                const order: string = response.toString();
                const orderNumber = order.length < 2 ? `00${order}` : order.length < 3 ? `0${order}` : order;

                setState({
                    ...state,
					loading:true,
                    formData: {
                        ...state.formData,
                        amount: totalPrice.toString(),
                        item_name: `#${orderNumber}`,
                        m_payment_id: orderNumber,
                    },
                });

                addOrder({
                    m_payment_id: orderNumber,
                    item_name: `#${orderNumber}`,
                    name_first,
                    name_last,
                    cell_number,
                    email_address,
                    quantity: item_description,
                    payed: false,
                    total: totalPrice,
                    canceled: false,
					got_tickets:false,
                })
                    .then((isSuccessful) => {
                        if (isSuccessful) {
                            setAddedToFireBase(isSuccessful);
                            setTimeout(() => {
                                form.current?.submit();
                            }, 100);
                        }
                    })
                    .catch((e) => {
                        console.log({ e });
						setState({...state, loading:false});
                    });
            })
            .catch((e) => {
                console.log({ e });
				setState({...state, loading:false});
            });
    };

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const newState = { ...state };
        const inputName = e.currentTarget.name;
        const inputVal = e.currentTarget.value;

        newState.formData[inputName] = inputVal;

        setState({ ...state, formData: { ...state.formData, [inputName]: inputVal } });
    };

    return (
        <div className="rounded-tl-3xl rounded-tr-3xl bg-white shadow-2xl shadow-black p-5">
            <div className="flex items-center justify-between">
                <h3>Boek Kaartjies</h3>
                <button type="button" className="text-xl text-gray-500" onClick={toggleForm}>
                    x
                </button>
            </div>

            <form
                ref={form}
                className="mt-6 mb-6"
                method="post"
                action={endpoint}
                onSubmit={(e) => {
                    !addedToFireBase ? e.preventDefault() : null;
                    !addedToFireBase ? addToFirebase() : null;
                }}
            >
                {Object.keys(state.formData).map((item, index) => {
                    const inputItemVal = state.formData[item];
                    const placeholders: { [key: string]: string } = {
                        name_first: "Naam",
                        name_last: "Van",
                        email_address: "E-Pos",
                        cell_number: "Kontak Nommer",
                        item_description: "Aantal Kaartjies",
                    };
                    const hiddenItems = ["merchant_id", "merchant_key", "return_url", "cancel_url", "notify_url", "m_payment_id", "amount", "item_name", "signature"];
                    return (
                        <input
                            key={index}
                            className={input}
                            placeholder={placeholders[item]}
                            type={hiddenItems.includes(item) ? "hidden" : item === "item_description" ? "number" : "text"}
                            name={item}
                            value={inputItemVal}
                            onInput={inputHandler}
                        />
                    );
                })}

                {state.loading ? (
                    <p className="text-center w-full mt-10">Besig met bespreeking...</p>
                ) : (
                    <div className="flex items-center justify-evenly">
                        <button type="submit" className={`${button} mt-6`}>
                            Betaal Nou
                        </button>

                        <button type="button" className={`${button} mt-6`}>
                            Betaal daar
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormSection;
