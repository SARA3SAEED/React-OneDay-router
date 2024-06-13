
import React from 'react';
import { useParams } from 'react-router-dom';
import Booksinfo from './Booksinfo.jsx'; 
import NavLogout from '../components/NavLogout.jsx'


export default function Bookdetails() {
  const { id } = useParams();
  const book = Booksinfo.find((book) => book.id === id);

  if (!book) return <div>Book not found</div>;

  return (
    <>
    <NavLogout></NavLogout>
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">{book.title}</h2>
      <div className="flex space-x-4">
        <img src={book.img} alt={book.title} className="rounded-lg w-64" />
        <div>
          <p className="text-gray-600 mb-4">{book.summary}</p>
          <p className="text-xl font-bold">${book.Price}</p>
        </div>
      </div>
    </div>
    </>
  );
}
