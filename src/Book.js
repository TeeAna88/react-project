function Book ({availableBooks}){
    
    return (
        <div className="products">
          {availableBooks.map((element => {
            const {id, item, price, image} = element;
            return (
              <div key={id} className="products-card">
                <img src={image} width='300px' height='400px' alt="books"/>
                <div className="products-info">
                   <h3>{item}</h3>
                   <h4>{price}</h4>
                </div>
              </div>
             
            )
          }))}
        </div>
    )
        }

export default Book;