import Head from "next/head";
import NavBar from "../NavBar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Dinner and Dessert</title>
      </Head>
      <div>
        <NavBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
