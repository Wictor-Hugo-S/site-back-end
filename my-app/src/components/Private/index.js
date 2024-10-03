import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');  // Verifica se há um token no localStorage

  if (!token) {
    // Se não houver token, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  return children;  // Se houver token, renderiza o componente solicitado
};

export default PrivateRoute;
