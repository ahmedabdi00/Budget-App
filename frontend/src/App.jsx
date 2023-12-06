import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";

// Pages
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import BlogPage from "./pages/BlogPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget-tracker", // Add a new route for Budget Tracker
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        {/* Use BrowserRouter for top-level routes */}
        <BrowserRouter>
          <Routes>
            {/* Define your top-level routes here */}
            <Route
              path="/*"
              element={<Main />} // Adjust this based on your layout structure
            />
          </Routes>
        </BrowserRouter>
      </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;