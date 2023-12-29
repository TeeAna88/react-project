import { useState } from "react";
import { data } from "./Data";
import Buttons from "./Buttons";
import Book from "./Book";

function Home () {

        const [books,setBooks] = useState(data);

  const chosenBooks = (searchTerm) => {
    if (searchTerm) {
      const newBooks = data.filter(element => element.searchTerm === searchTerm);
      setBooks(newBooks);
    } else {
      setBooks(data);
    }
  }

  return <div>
    <Buttons filteredBooks = {chosenBooks}/>
    <Book availableBooks={books}/>
    </div>


}

export default Home;