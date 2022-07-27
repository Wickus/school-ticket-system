import { setCookie } from "@/lib/cookies";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
    const router = useRouter();
    const [state, setState] = useState({
        username: "",
        password: "",
    });
    const { username, password } = state;

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget;

        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            setCookie("login", "true", 1);
            router.push("/dashboard");
        } else {
            alert("invalid username and password");
        }
    };

	const input = "border-[1px] border-gray-200 w-[300px] p-[.5rem_1rem] mb-2 rounded-xl";
	const button = "bg-red-500/70 shadow-lg shadow-red-500/40 text-white p-[0.5rem_2rem] rounded-full";

    return (
        <div className="max-w-[420px] m-auto p-10">
			<h1 className="text-2xl mb-4">Login To Dashboard</h1>
            <form onSubmit={handleSubmit} className={"flex flex-col items-start justify-center w-full"}>
                <input className={input} name="username" placeholder="Username" value={username} onInput={inputHandler} />
                <input className={input} name="password" placeholder="Password" value={password} onInput={inputHandler} />
                <button className={button} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
