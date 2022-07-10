import Image from "next/image";

const Content: React.FC = () => {
    const content = `Kom kuier saam in Feëtjieland waar ons Einstein maats jou sal betower! Diertjies, seerowers, prinsesse, meerminne en soveel meer gaan almal vermaak!`;
    const gradient = `after:content-[''] after:absolute after:top-0 after:left-0 after:[background-image:linear-gradient(white_60%,transparent)]
	after:w-full after:h-full`;
    const gradient2 = `after:content-[''] after:absolute after:top-0 after:left-0 after:[background-image:linear-gradient(white_10%,transparent_90%)]
	after:w-full after:h-24`;
    const gradient3 = `before:content-[''] before:absolute before:bottom-0 before:left-0 before:[background-image:linear-gradient(transparent_50%,white)]
	before:w-full before:h-24`;

    return (
        <section
            className={`relative pb-[10rem] after:content=[''] after:absolute after:w-full after:h-10 after:brightness-75 after:bg-[url('/img/sand.png')] after:bg-cover after:scale-y-[-1] after:top-0`}
        >
            <div className={`absolute -top-1 left-0 bg-[url('/img/land-scape.jpg')] bg-cover w-full h-44 scale-y-[-1] bg-bottom ${gradient}`} />
            <div className="relative z-10 p-[5rem_2rem_2rem_2rem]">
                <h3 className="text-xl font-bold font-happy-day">Welkom</h3>
                <div className="flex items-center justify-between">
                    <p className="mt-2 text-base w-1/2">{content}</p>
                    <div className="relative w-1/2 h-56 -right-4 -top-4">
                        <Image src="/img/princess.png" layout="fill" />
                    </div>
                </div>
            </div>
            <div className={`absolute -bottom-2 w-full h-48 bg-[url('/img/pirates.jpg')] bg-bottom bg-cover ${gradient2} ${gradient3}`} />
        </section>
    );
};

export default Content;
