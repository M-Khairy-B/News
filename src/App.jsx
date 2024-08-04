import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faFacebook } from "/node_modules/@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Technology from "./component/Technology/Technology";
import Business from "./component/Business/Business";
import Sports from "./component/Sports/Sports";
import Podcasts from "./component/Science/Science";
import Notfound from "./component/Notfound/Notfound";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import { Provider } from "react-redux";
import store from "./lib/store";
import DetailsArticle from "./component/DetailsArticle/DetailsArticle";
import { ArticleProvider } from "./Context/ArticleContext";
import Entertainment from "./component/Entertainment/Entertainment";
import General from "./component/General/General";
import Science from "./component/Science/Science";

let routering = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "technology",
                element: <Technology/>,
            },
            {
                path: "business",
                element: <Business />,
            },
            {
                path: "sports",
                element: <Sports />,
            },
            {
                path: "entertainment",
                element: <Entertainment />,
            },
            {
                path: "general",
                element: <General />,
            },
            {
                path: "science",
                element: <Science />,
            },
            { path: "*", element: <Notfound /> },
            
            {path:"detailsArticle/:title",
                element:<DetailsArticle/>
            }
        ],
    },
]);

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Provider store={store}>
            <ArticleProvider>

                <RouterProvider router={routering}></RouterProvider>
                </ArticleProvider>

            </Provider>
        </>
    );
}

export default App;
