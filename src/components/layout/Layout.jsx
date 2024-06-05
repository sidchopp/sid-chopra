import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
