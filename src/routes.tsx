import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Users from "./pages/Users.tsx";
import UserRegisterForm from "./components/UserRegisterForm.tsx";
import UserEdit from "./pages/UserEdit.tsx";
import Orders from "./pages/Orders.tsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>}/>
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/register" element={<Layout><UserRegisterForm /></Layout>} />
                <Route path="/users" element={<Layout><Users /></Layout>}/>
                <Route path="/users/:id" element={<Layout><UserEdit /></Layout>} />
                <Route path="/orders" element={<Layout><Orders /></Layout>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
