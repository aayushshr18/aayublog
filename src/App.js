import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import News from "./pages/News";
import Updates from "./pages/Updates";
import "./app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
 <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="jobs" element={<Jobs/>}/>
          <Route path="updates" element={<Updates/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
