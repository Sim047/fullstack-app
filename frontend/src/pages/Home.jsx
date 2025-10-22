import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to Kwako Task Manager! 🎉
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A powerful task management application built with React, Tailwind CSS, and modern web technologies.
          Organize your tasks, manage your workflow, and boost your productivity.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button variant="primary" className="text-lg px-8 py-3">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="secondary" className="text-lg px-8 py-3">
              Explore Users API
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow duration-200">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Task Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Add, complete, and delete tasks. Filter by status and persist your data locally.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-200">
          <div className="text-4xl mb-4">🌙</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Toggle between light and dark themes for comfortable viewing in any lighting.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-200">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Works perfectly on desktop, tablet, and mobile devices with Tailwind CSS.
          </p>
        </Card>
      </div>

      {/* Quick Links */}
      <Card>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/tasks">
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 border-transparent hover:border-blue-500">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                🗂️ Task Manager
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your daily tasks with our intuitive task manager
              </p>
            </Card>
          </Link>
          <Link to="/users">
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 border-transparent hover:border-blue-500">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                👥 Users API Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore API integration with JSONPlaceholder users data
              </p>
            </Card>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
