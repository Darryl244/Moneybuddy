import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Expensetrack from "./components/Expensetrack";
import Contact from "./components/Contact";
import Billsplitting from "./components/Billsplitting";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Financiallimit from "./components/Financiallimit";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expensetrack" element={<Expensetrack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/billsplitting" element={<Billsplitting />} />
          <Route path="/financiallimit" element={<Financiallimit />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
