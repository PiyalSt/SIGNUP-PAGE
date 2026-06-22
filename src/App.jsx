import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
