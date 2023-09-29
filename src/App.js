import { Route, Routes } from "react-router-dom";
import { Navbbar } from "./compontens/Navbbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Account } from "./pages/Account";
import { Singup } from "./pages/Singup";

function App() {
  return (
    <>
      <Navbbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
