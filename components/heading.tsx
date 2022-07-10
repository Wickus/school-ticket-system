import Image from "next/image";

const Heading: React.FC = () => {
    /* Content */
    const { title, subTitle } = {
        title: "Feëtjieland",
        subTitle: "Einstein Akademie",
    };

    return (
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-44 bg-[url('/img/land-scape.jpg')] bg-cover">
            {/*  Content  */}
            <h1 className="text-5xl font-fairy-godmother tracking-wide">{title}</h1>
            <h2 className="relative text-xl top-0 font-bold">{subTitle}</h2>
            {/*  Media  */}
            <div className="absolute w-28 h-24 top-[2px] left-[2px]">
                <Image src={"/img/clipart/fairy-male.png"} layout="fill" />
            </div>
            <div className="absolute w-28 h-32 scale-x-[-1] top-6 right-1">
                <Image src={"/img/clipart/fairy-shroom.png"} layout="fill" />
            </div>
        </div>
    );
};

export default Heading;
