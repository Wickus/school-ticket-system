import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="bg-[url('/img/background.jpg')] min-h-[100vh] max-h-[100vh] overflow-auto bg-[position:-300px_-300px] lg:bg-center">
            <div className="w-full max-w-[1200px] bg-white/90 m-auto p-5">{children}</div>
        </main>
    );
};

export default Layout;
