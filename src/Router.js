import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Paginas/Home";
import Form from "./Paginas/Form";
import List from "./Paginas/List";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Form />} path="/formulario" />
        <Route element={<List />} path="/listagem" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
