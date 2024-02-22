import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContainer from "../comp/mainContainer";
import { Helmet } from 'react-helmet-async';

function JS() {
  return (
    <>
    <Helmet>
        <title>Page JS</title>
        <meta name="description" content="jjjjjjjjjjjjjjjjjjj"/>
      </Helmet>
      <Header />

      <MainContainer appe="JS" />

      <Footer />
    </>
  );
}

export default JS;
