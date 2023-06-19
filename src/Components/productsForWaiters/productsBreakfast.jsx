import React from "react"
import CardElement from '../../Components/cardElement/cardElement';
import '../productsForWaiters/productAyB.css'

export default function productsBreakfast(){
    return (
        <div className='content-list-breakfast'>
            {/* CardElement 1 */}
            <CardElement title="American Coffee" price="5" />
                {/* CardElement 2 */}
            <CardElement title="Coffee with Milk" price="7" />
            {/* CardElement 3 */}
            <CardElement title="Ham and Cheese Sandwich" price="5" />
            {/* CardElement 4 */}
            <CardElement title="Natural fruit juice" price="7" />
        </div>

    )
}
      
      