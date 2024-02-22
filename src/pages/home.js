import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContainer from "../comp/mainContainer";
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
    <Helmet>
        <title>Page Home</title>
        <meta name="description" content="ooooooooooooooo"/>
      </Helmet>
      <Header />

      <MainContainer appe="HOME" />

      <Footer />
    </>
  );
}

export default Home;
