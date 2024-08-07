import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import History from "./components/History";
import AboutMain from "./components/AboutMain";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route index element={<AboutMain />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="history" element={<History />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;