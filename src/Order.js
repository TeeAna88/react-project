import { useRef, useState} from "react";
import Swal from "sweetalert2";

function Order (){
   
const [addBooks, setAddBooks] = useState([]); 
const [value, setValue] = useState('');
const [showMore, setShowMore] = useState(false); 
const inputRef = useRef()


const handleClick = () => {
    if ( value === ''){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please enter your order.",
    
      });
    } else {
       setAddBooks([...addBooks, {id: addBooks.length +1, title: value }])
       setValue('')
    }
    inputRef.current.focus();
 }
const description = 'When pre-ordering a book from our bookstore, you embark on a journey of anticipation and literary excitement. Placing a pre-order not only secures your copy of the much-anticipated book but also ensures that you are among the first to delve into its pages upon release. Your pre-order seamlessly integrates into our efficient system, where it joins a queue of eager readers eagerly awaiting the arrival of their chosen tome. Rest assured, our dedicated team diligently processes pre-orders, and you can expect a timely update as your book makes its way to you. We understand the joy of immersing oneself in a captivating story, and our commitment to delivering a seamless pre-order experience reflects our passion for connecting readers with the literature they love. Get ready to embark on a literary adventure as we notify you soon about the arrival of your pre-ordered book. Happy reading!'; 
 

const deleteItem = (ids) => {
    const sortedList = addBooks.filter((item) => item.id !== ids);
    setAddBooks(sortedList);
  } 

const onFormSubmit = (e) => {
     e.preventDefault ();
  }

  const SubmitEvent = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your order has been saved",
        showConfirmButton: false,
        timer: 1500
      });
  } 

    return (
        <div>
       
       <h3>Preorder your book from us</h3>
       <div>
       <p className="order">{showMore ? description : description.substring (0, 270) + '...'}
       <button className='more' onClick={() => setShowMore (!showMore)}>{showMore ? "show less" : "show more"}</button>
        </p>
        </div>
        <form onSubmit={onFormSubmit}>
        <div>
          <input placeholder='Your next order..'
              type="text"
              ref={inputRef}
              value={value} 
              onChange={ e => setValue(e.target.value)}/>
              
          <button className="button-add" onClick={handleClick} >Add</button>
        </div>
        <ul>
            {addBooks.map((item, index) => 
            <li key = {index} >{item.title}
             <button className="button-delete" onClick = {() => deleteItem (item.id)}>Delete</button>
            </li>)} 
        </ul>

        <div>
            <input placeholder="Enter your email..." type="email"></input>
            <button className="button-add" onClick = {SubmitEvent} >Submit</button>
        </div>
        </form>
        </div>
    )
}


export default Order;