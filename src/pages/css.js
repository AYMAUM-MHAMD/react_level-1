import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContainer from "../comp/mainContainer";
import { Helmet } from "react-helmet-async";

function Css() {
  return (
    <>
      <Helmet>
        <title>Page CSS</title>
        <meta name="description" content="ccccccccccccccccc" />
        <style type="text/css">{`
    `}</style>
      </Helmet>
      <Header />

      <MainContainer appe="CSS" />

      <Footer />
    </>
  );
}

export default Css;
