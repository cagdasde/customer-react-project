import React, { Component } from 'react'
import Customer from "./Customer";
import CustomerConsumer from "../context";

class Customers extends Component {
    render() {
       return(
           <CustomerConsumer>{
               value => {
                   const {customers} = value;
                   return (
                    <div>
                        {
                            customers.map(customer => {
                                return (
                                    <Customer
                                        key={customer.id}
                                        id={customer.id}
                                        name={customer.name}
                                        job={customer.job}
                                       phone={customer.phone}
                                       age ={customer.age}
                                       taxnumber ={customer.taxnumber}
                                       comname ={customer.comname}
                                    adress ={customer.adress}
                                        />
                                )
                            })
                        }
                    </div>
                )
               }}
           </CustomerConsumer>
       )
     

        
    }
}

export default Customers