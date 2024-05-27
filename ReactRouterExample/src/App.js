import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProductDetail } from './components/ProductDetail';
import {Error} from './components/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Liza!</div>,

      errorElement: <Error/>,
    },
    {
      path: "/product/:id",
      element: <ProductDetail/>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
