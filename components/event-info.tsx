interface EventData {
    name: string;
    value: string;
    link?: string;
}
const EventInfo: React.FC = () => {
    const data: EventData[] = [
        {
            name: "Plek",
            value: "Event City",
            link: "https://www.google.com/maps/dir//event+city/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1eea5fd53b0cbda1:0x37d77461c5b99fa5?sa=X&ved=2ahUKEwjSzYDDt-L4AhVUQ0EAHaptDCgQ9Rd6BAhCEAQ",
        },
        { name: "Datum", value: "17 September 2022" },
        { name: "Tyd", value: "10:00" },
        { name: "Prys", value: "R120.00" },
    ];
    return (
        <div className="mt-8 pb-36">
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
            <table className="mt-2">
                <tbody>
                    {data.map(({ name, value, link }: EventData, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="w-24 font-bold">{name}:</td>
                                <td>
                                    {link ? (
                                        <a target={"_blank"} href={`${link}`}>
                                            {value}
                                        </a>
                                    ) : (
                                        value
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <iframe className="w-full max-w-[100%] mt-5" src="https://maps.google.com/maps?q=Event%20City&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
    );
};

export default EventInfo;
