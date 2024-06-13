import React from 'react';
import { Link } from 'react-router-dom';
import Booksinfo from './Booksinfo.jsx'; 
import NavLogout from '../components/NavLogout.jsx'

export default function Books() {
  return (
    <>
    <NavLogout></NavLogout>
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Books</h2>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {Booksinfo.map((book) => (
          <div key={book.id} className="border p-4 rounded-lg shadow-lg bg-base-100">
            <img src={book.img} alt={book.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-2">Author: {book.author}</p>
            <p className="mb-2">${book.Price}</p>
            <Link to={`/Books/${book.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
