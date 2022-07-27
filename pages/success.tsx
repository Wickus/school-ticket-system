import React, { useState } from "react";
import { getOrder } from "@/lib/get-order";
import { PayFastPayload } from "interfaces/payfast-payload";

const ReturnPage = () => {
    const [state, setState] = useState({
        loading: false,
        search: "",
        searched: false,
        orders: [],
    });
    const { search, loading, orders, searched } = state;

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setState({ ...state, search: value });
    };

    const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ ...state, loading: true, searched: true });

        getOrder(state.search).then((res) => {
            setState({ ...state, loading: false, orders: res, searched: true });
        });
    };

    return (
        <div className="max-w-[420px] w-full m-auto h-screen overflow-hidden flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-green-600">Betaaling was suksesvol</h1>
            <p className="text-center">Kyk uit vir n epos van PayFast. Jou bespreekings nommer sal daar verskein.</p>
            <hr className="bg-gray-200 w-full h-0.5 mt-4 mb-4" />

            <p>Soek jou bespreekings nomer:</p>
            <form className="flex items-center justify-start mt-5 w-full" onSubmit={searchHandler}>
                <input className="border-[1px] border-gray-200 w-full mr-2 p-[.5rem_1rem] rounded-xl" name="search" placeholder="Sel nommer / e-pos" value={search} onInput={inputHandler} />
                <button type="submit" disabled={loading} className="h-full bg-gray-200 p-2 rounded-xl text-sm">
                    Soek
                </button>
            </form>

            {searched ? (
                loading ? (
                    <p className="mt-4">Besig om te soek...</p>
                ) : (
                    <div className="mt-4">
                        {orders.length === 0 ? (
                            <p>Geen bespreekings nommers gevind</p>
                        ) : (
                            <>
                                <p className="text-center font-bold">Jou bespreeking nommers:</p>
                                <ul className="flex items-center justify-center mt-2">
                                    {orders.map((order: PayFastPayload) => {
                                        return <li className="bg-gray-200 p-1.5 m-1 rounded-xl">{order.item_name}</li>;
                                    })}
                                </ul>
                            </>
                        )}
                    </div>
                )
            ) : null}
        </div>
    );
};

export default ReturnPage;
