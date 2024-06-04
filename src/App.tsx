import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar'
import Navbar2 from "./components/Navbar2";
function App() {
  return (
    <>
      <Navbar2 />
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
