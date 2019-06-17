import React from "react";
import Footer from "./components/footer.component/footer.component";
import Header from "./components/header.component/header.component";
import Main from "./components/main.component/main.component";
import "./App.scss";

function App() {
  return (
    <section className="app">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
