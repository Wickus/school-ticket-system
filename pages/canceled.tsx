import Link from "next/link";

const CancelPage = () => {
	const button = "bg-red-500/70 shadow-lg shadow-red-500/40 text-white p-[1rem_2rem] rounded-full mt-4";
    return (
        <div className="max-w-[420px] w-full m-auto h-screen overflow-hidden flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-orange-600">Betaaling was gekanseleer</h1>
            <p className="text-center mt-2">Gaan trug na bespreekings skerm</p>
            <Link href={"/"}>
                <button type="button" className={button}>Gaan Terug</button>
            </Link>
        </div>
    );
};

export default CancelPage;
