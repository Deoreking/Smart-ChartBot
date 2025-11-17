import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compound/nav';
import Body from './compound/body';
import Part from './compound/part';
import Reviews from './compound/rewies1';
import Team from './compound/team';
import Chart from './compound/chart';
import Work from './compound/workflow';
import Footer from './compound/footer';
import ChatbotApp from './compound/ChartbotAPP';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your main app styles
import './index.css'; // Chatbot styles

function LandingPage() {
    return (
        <>
            <Navbar />
            <Body />
            <Part />
            <Reviews />
            <Team />
            <Chart />
            <Work />
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/chatbot" element={<ChatbotApp />} />
            </Routes>
        </Router>
    );
}