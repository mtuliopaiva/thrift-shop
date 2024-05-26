import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import ProductsPage from './pages/Products';
import ClientsPage from './pages/Clients';
import ChatPage from './pages/Chat';
import SettingsPage from './pages/Settings';
import LoginPage from './pages/Auth/Login';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>

      <Route path="/login" element={<LoginPage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/products" element={<ProductsPage />} />
        <Route path="/admin/clients" element={<ClientsPage />} />
        <Route path="/admin/chat" element={<ChatPage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
clients

      </Routes>
    </Router>
  );
};

export default AppRoutes;
