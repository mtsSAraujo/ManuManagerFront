import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>}/>
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route
                    path="/register"
                    element={
                        <Layout>
                            <h2 className="text-center mt-5">Página de Registro</h2>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
