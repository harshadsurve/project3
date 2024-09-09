
import './App.css';
import Category from './components/Category';
import Header from './components/Header';
import Localeties from './components/Localeties';
import OnlineDelivery from './components/OnlineDelivery';
import Restaurant from './components/Restaurant';
import TopRest from './components/TopRest';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <Header />
     <Category />
     <TopRest />
     <OnlineDelivery />
     <Localeties />
     <Restaurant />
     <Footer />
    </>
  )
}

export default App
