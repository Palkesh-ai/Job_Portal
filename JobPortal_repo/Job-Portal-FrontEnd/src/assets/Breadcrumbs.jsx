import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ Title, NavLink, Name }) => {
  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li>
          <div className="flex items-center">
            <Link to={NavLink} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">{Name}</Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{Title}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;