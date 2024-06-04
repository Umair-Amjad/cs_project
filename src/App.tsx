import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar'
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Navbar2 />
      <Hero/>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route
            path="/contact"
            element={
              <div
                style={{
                  marginTop: 65,
                }}
              >
                Hello world
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
