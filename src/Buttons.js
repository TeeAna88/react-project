// import Book from "./Book";
// import { data } from "./Data";
// import { useState } from "react";

function Buttons ({filteredBooks}) {

    return(
        <div className="cont">
            <button className="btn" onClick = {() => filteredBooks('adults')}>Adults</button>
            <button className="btn" onClick = {() => filteredBooks('teens')}>Teens</button>
            <button className="btn" onClick = {() => filteredBooks('kids')}>Kids</button>
            <button className="btn" onClick = {() => filteredBooks()}>All Books</button>

        </div>

    )
}

export default Buttons;