import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import History from "./components/History";
import AboutMain from "./components/AboutMain";
import ClassList from "./components/ClassList";
import axios from "axios";

// Define the loader function directly in this file
const fetchClassData = async (className) => {
    try {
        const res = await axios.get(`/classlist/${className}`);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Component to handle data fetching and rendering
const ClassListLoader = () => {
    const { class: className } = useParams();
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetchClassData(className)
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [className]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (!data) {
        return <p>No data available.</p>;
    }

    return <ClassList data={data} />;
};

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
                <Route path="/classlist/:class" element={<ClassListLoader />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
