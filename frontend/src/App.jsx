import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WastePage from "./pages/WastePage";
import HomePage from "./pages/HomePage";

function App() {
  window.onload = function () {
    var shadowRoot = document.querySelector("spline-viewer").shadowRoot;
    shadowRoot.querySelector("#logo").remove();
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/explore-waste/:waste",
      element: <WastePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
