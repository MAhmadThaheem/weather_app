import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import SaveLocation from "./components/SaveLocation";


const router=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-red-700 font-bold bg-white p-4 rounded">
  Page Not Found
</div>
,
        children: [
            {
                path: "savedlocations",
                element: <SaveLocation/>
            },
            {
                path: "home",
                element: <Home/>
            },
        ]
    }
])

    createRoot(document.getElementById("root")).render(<RouterProvider router={router} />)
