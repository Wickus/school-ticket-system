import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const main = [
        // "bg-[url('/img/background.jpg')]",
        "min-h-[100vh]",
        "overflow-auto",
        "bg-[position:-300px_-300px]",
        "lg:bg-center",
    ].join(" ");
    return (
        <main className={main}>
            <div className="w-full max-w-[420px] bg-white/90 m-auto">{children}</div>
        </main>
    );
};

export default Layout;
