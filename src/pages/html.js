import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContainer from "../comp/mainContainer";
import { Helmet } from 'react-helmet-async';

function Html() {
  return (
    <>
    <Helmet>
        <title>Page Html</title>
        <meta name="description" content="hhhhhhhhhhhhhhhhh"/>
      </Helmet>
      <Header />

      <MainContainer appe="HTML" />

      <Footer />
    </>
  );
}

export default Html;
