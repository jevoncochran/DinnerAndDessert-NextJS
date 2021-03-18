import Head from "next/head";
import Layout from "../components/customerView/Layout";
import HomeImage from "../components/customerView/HomeImage";
import Inquiry from "../components/customerView/Inquiry";
import ImageShowcase from "../components/customerView/ImageShowcase";
import CurrentMenu from "../components/customerView/CurrentMenu";

export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id=AePu5Mc-t4mnM-NEDkrqcSUAYk5Tj1Zw_90VQ-4Eie2P6bHjbYOkHpo9xCAQt9soXJ9bONXzL_I4Wtdb&currency=USD"></script>
      </Head>
      <Layout>
        <HomeImage />
        <CurrentMenu />
        <Inquiry />
        <ImageShowcase />
      </Layout>
    </div>
  );
}
