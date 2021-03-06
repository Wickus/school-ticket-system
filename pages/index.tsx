import type { NextPage } from "next";
// Components
import Layout from "@/components/layout";
import Heading from "@/components/heading";
import Content from "@/components/content";
import EventInfo from "@/components/event-info";
import FormSection from "@/components/form";

const Home: NextPage = () => {
    return (
        <Layout>
            <Heading />
            <Content />
            <EventInfo />
            <FormSection />
        </Layout>
    );
};

export default Home;
