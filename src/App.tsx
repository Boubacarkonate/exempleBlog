import Footer from "./footer/Footer";
import { Header } from "./hearder/Header";
import Main from "./main/Main";
import ScrollToTopButton from "./main/ScrollToTopButton";

const App = () => {
  return (
    <div
      id="home"
      className="grid grid-cols-1 gap-32 bg-amber-50 md:overflow-x-hidden"
    >
      <Header />
      <Main />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
