import "./App.css";
import Header from "./header";
import Main from "./main";
import Maindata from "./maindata";
import Footer from "./footer";

function App() {
  const Rmaindata = Maindata.map(i => {
    return (
      <Main key={i.id} {...i} />
    )
  });
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="card-container">
        {Rmaindata}
        </div>
        
        <Footer />
      </header>
    </div>
  );
}

export default App;
