import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClassifyPage from "./pages/ClassifyPage";
import ExplorePage from "./pages/ExplorePage";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/classify",
      element: <ClassifyPage />,
    },
    {
      path: "/explore",
      element: <ExplorePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
