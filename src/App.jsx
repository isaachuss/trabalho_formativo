import './App.css'
import Header from './Components/Header';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <>
      <Header/>

      <Banner/>
      
      <Cards/>

      <div className="prod">
        <div className="prods red p1"></div>
        <div className="prods red p2"></div>
        <div className="prods red p3"></div>
        <div className="prods red p4"></div>
        <div className="prods red p5"></div>
        <div className="prods red p6"></div>
      </div>

      <div className="baixod">
        <div className="baixo red">
          <h2 className="font white">MUZAAC</h2>
          <div>
            <h4 className="font">(55)996759409</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App