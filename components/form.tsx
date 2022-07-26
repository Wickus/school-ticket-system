import { useState } from "react";
import { purchase_config } from "config";

const Form: React.FC<{ merchant_hash: string }> = (props) => {
    const { merchant_hash } = props;
	const {endpoint, cancel_url, notify_url, return_url, merchant_id, merchant_key} = purchase_config;
    const [state, setState] = useState({
        expanded: false,
        formData: {
			merchant_id,
			merchant_key,
			return_url,
			cancel_url,
			notify_url
        },
    });
    const { expanded } = state;

    const toggleBookingForm = () => {
        setState({ ...state, expanded: !state.expanded });
    };

    const button = "bg-red-500/70 shadow-lg shadow-red-500/40 text-white p-[1rem_2rem] rounded-full";
    const input = "border-[1px] border-gray-200 w-full p-[.5rem_1rem] mb-2 rounded-xl";

    const From = () => {
        return (
            <div className="rounded-tl-3xl rounded-tr-3xl bg-white shadow-2xl shadow-black p-5">
                <div className="flex items-center justify-between">
                    <h3>Boek Kaartjies</h3>
                    <button type="button" className="text-xl text-gray-500" onClick={toggleBookingForm}>
                        x
                    </button>
                </div>

                <form className="mt-6 mb-6">
                    <input type="text" className={input} placeholder="Naam" />
                    <input type="text" className={input} placeholder="Van" />
                    <input type="text" className={input} placeholder="Kontak Nommer" />
                    <input type="email" className={input} placeholder="E-Pos" />
                    <input type="number" className={input} placeholder="Aantal Kaartjies" />
                    <div className="flex items-center justify-evenly">
                        <button type="submit" className={`${button} mt-6`}>
                            Betaal Nou
                        </button>

                        <button type="button" className={`${button} mt-6`}>
                            Betaal daar
                        </button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full block max-w-[420px]">
            {!expanded ? (
                <div className="flex items-center justify-between h-28 rounded-tl-3xl rounded-tr-3xl bg-white shadow-2xl shadow-black p-5">
                    <p>RSVP vir die konsert</p>
                    <button type="button" className={button} onClick={toggleBookingForm}>
                        Bespreek Kaartjies
                    </button>
                </div>
            ) : (
                <From />
            )}
        </div>
    );
};

export default Form;
