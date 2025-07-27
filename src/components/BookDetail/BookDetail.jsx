import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/addToDb";


const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    
    const {bookId:currentBookId, image} = book;
    const handleMarkAsRead = (id) =>{
     addToStoredReadList(id) 
    }
    return (
        <div className="my-12">
            <h2>Bookdetail:{bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br/>
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4">Read</button>
            <button className="btn btn-accent">Add to WishList</button>

            
        </div>
    );
};

export default BookDetail;