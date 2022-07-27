import Table from "@/components/dashboard/table";
import { getCookie } from "@/lib/cookies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const router = useRouter();
    const [state, setState] = useState({
        loggedIn: false,
    });
    const { loggedIn } = state;
    useEffect(() => {
        const login = getCookie("login");
        if (login !== "true") {
            router.push("/dashboard/login");
        } else {
            setState({ loggedIn: true });
        }
    }, []);

    return loggedIn ? (
        <section className="p-10">
            <div>
                <h1 className="text-4xl font-bold">Alle Bespreekings</h1>
				<br/>
                <Table />
            </div>
        </section>
    ) : null;
};

export default Dashboard;
