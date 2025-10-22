import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Kwako App Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/tasks">
          <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer text-center p-8">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Task Manager</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your tasks and boost productivity
            </p>
          </Card>
        </Link>

        <Link to="/users">
          <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer text-center p-8">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Users API</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore API integration features
            </p>
          </Card>
        </Link>

        <Card className="text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Kwako App</h3>
          <p className="text-blue-100">
            Full-stack React application with modern features
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
