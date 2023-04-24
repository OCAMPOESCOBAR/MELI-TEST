import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home, ProductDetail, ProductsList } from "./pages/index";

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ProductsList />} />
          <Route path="/items/:id" element={<ProductDetail />} />
          <Route path="*" element={<Home />} />
        </Route>
    </Routes>
  );
}

export default App;
