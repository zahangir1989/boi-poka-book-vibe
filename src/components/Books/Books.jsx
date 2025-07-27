import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
    fetch('../../../public/booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
           <div className="grid grid-cols-1 font-bold md:grid-cols-2 lg:grid-cols-3 gap:24">
            {
                books.map(book => <Book book={book} key={book.bookId} ></Book>)
            }
           </div>
            
        </div>
    );
};

export default Books;
// ** 1. state to store books
// ** 1. useEffect;
// ** 3. fetch to load data
// 4. set the data to the state