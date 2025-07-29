import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../Utility/addToDb';
import Book from '../Book/Book';
import { Helmet } from 'react-helmet-async';

const ListtedBooks = () => {
  const [redList, setReadList]= useState([]);
  const allBooks = useLoaderData();
  useEffect(()=>{
    const storedReadList  = getStoreReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
    setReadList(readBookList);

  },[])

    return (
        <div>
          <Helmet>
            <title>book poka || ListedBooks</title>
          </Helmet>
            <h3 className="text-3xl my-8">Listed Books</h3>

  
  <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I read:{redList.length}</h2>
      {
        redList.map(book=> <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My wish List</h2>
    </TabPanel>
  </Tabs>

            
        </div>
    );
};

export default ListtedBooks;