import React from 'react';
import cover from './cover.jpg'

function Services(){
    return ( <div className='services'>
        <img className='cup' src={cover} alt='books' width='400px 200px'/>
        <p className='authors'>Congratulations on publishing your book! All the work you have done thus far is something to be proud of. Thank you for including 'Around the Books' in the next steps of your book's journey.<p/>
        If you are interested in getting your book in our book store, please contact us via <span>email</span>.
        If you are interested in scheduling an event, please call us to schedule an event.
        If you are an author looking for tips, please see our author tips page.
        </p>
        </div>
    )
}

export default Services;