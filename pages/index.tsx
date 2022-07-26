import type { NextPage } from "next";
// Components
import Layout from "@/components/layout";
import Heading from "@/components/heading";
import Content from "@/components/content";
import EventInfo from "@/components/event-info";
import Form from "@/components/form";
import { GetServerSideProps } from "next";

const Home: NextPage<{ merchant_hash: string }> = (props) => {
    const { merchant_hash } = props;
    return (
        <Layout>
            <Heading />
            <Content />
            <EventInfo />
            <Form {...{ merchant_hash }} />
        </Layout>
    );
};

export default Home;

export async function getServerSideProps(context: GetServerSideProps) {
    return {
        props: {
            merchant_hash: "12341231412124124",
        },
    };
}
