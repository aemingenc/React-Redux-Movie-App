
import './App.scss';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
    <Router>
            <Header/>
          <div className='container'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:imdbid" element={<MovieDetail/>}/>
                <Route path="/register" element={<PageNotFound/>}/>
                
            </Routes>
          </div>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
