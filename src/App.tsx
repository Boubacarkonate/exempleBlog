import Footer from "./footer/Footer";
import { Header } from "./hearder/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-8 bg-amber-50 md:overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
