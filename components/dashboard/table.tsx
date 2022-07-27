import { getOrders } from "@/lib/get-all-orders";
import { FirebasePayload } from "interfaces/firebase-payload";
import React, { useEffect, useState } from "react";
import { updateOrderGotTickets } from "@/lib/update-order-got-tickets";

const Table = () => {
    const [state, setState] = useState({
        orders: [],
        filteredOrders: [],
    });
    const { orders, filteredOrders } = state;

    useEffect(() => {
        getOrders().then((res) => setState({ orders: res, filteredOrders: res }));
    }, [orders]);

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        const searchedOrders = [...orders];
        setState({
            ...state,
            filteredOrders: searchedOrders.filter((order: FirebasePayload) => {
                return (
                    order.m_payment_id.includes(search) ||
                    order.name_first.includes(search) ||
                    order.name_last.includes(search) ||
                    order.email_address.includes(search) ||
                    order.cell_number.includes(search)
                );
            }),
        });
    };

    const checkHandler = async (e: React.FormEvent<HTMLInputElement>) => {
        const { value, checked } = e.currentTarget;

        await updateOrderGotTickets(value, checked);
    };

    const td = "border-[1px] border-gray-200 p-2";
    const input = "border-[1px] border-gray-200 w-[300px] p-[.5rem_1rem] mb-2 rounded-xl";

    return (
        <div>
            <input className={input} name="search" placeholder="Soek vir bespreeking" onInput={inputHandler} />
            <br />
            <table className="w-full text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th>Bespreeking</th>
                        <th>Naam</th>
                        <th>Van</th>
                        <th>E-pos</th>
                        <th>Kontak Nommer</th>
                        <th>Aantal Kaartjies</th>
                        <th>Gebetaal</th>
                        <th>Gekanseleer</th>
                        <th>Kaartjies Ontvang</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((item: FirebasePayload) => {
                        const { m_payment_id, name_first, name_last, email_address, cell_number, quantity, payed, canceled, got_tickets } = item;
                        return (
                            <tr>
                                <td className={td}>{m_payment_id}</td>
                                <td className={td}>{name_first}</td>
                                <td className={td}>{name_last}</td>
                                <td className={td}>{email_address}</td>
                                <td className={td}>{cell_number}</td>
                                <td className={td}>{quantity}</td>
                                <td className={td}>{payed ? "Ja" : "Nee"}</td>
                                <td className={td}>{canceled ? "Ja" : "Nee"}</td>
                                <td className={td}>
                                    <input className="cursor-pointer" type="checkbox" name={m_payment_id} value={m_payment_id} checked={got_tickets} disabled={got_tickets} onChange={checkHandler} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
