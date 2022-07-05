import { useState } from "react";

const Form: React.FC = () => {
    const [state, setState] = useState({
        expanded: false,
        formData: {},
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
                    <input type="email" className={input} placeholder="Epos" />
                    <input type="number" className={input} placeholder="Aantal Kaartjies" />

                    <button type="submit" className={`${button} mt-6`}>
                        Betaal Nou
                    </button>
                </form>
            </div>
        );
    };

    return (
        <div>
            {/* Mobile Form */}
            <div className="fixed bottom-0 left-0 w-full block lg:hidden">
                {!expanded ? (
                    <div className="flex items-center justify-between h-28 rounded-tl-3xl rounded-tr-3xl bg-white shadow-2xl shadow-black p-5">
                        <p>RSVP vir die konsert</p>
                        <button type="button" className={button} onClick={toggleBookingForm}>
                            Boek Kaartjies
                        </button>
                    </div>
                ) : (
                    <From />
                )}
            </div>
            {/* Desktop Form */}
            <div className="lg:block hidden">
                <From />
            </div>
        </div>
    );
};

export default Form;
