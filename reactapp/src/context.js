import React, { Component } from 'react'
import axios from "axios";

const CustomerContext = React.createContext();
//provider ,consumer
const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_CUSTOMER":
    return {
      ...state,
      customers: state.customers.filter(customer => action.payload !== customer.id)
    }
    case "ADD_CUSTOMER": 

    return {...state,
      customers: [...state.customers,action.payload]}
      case "UPDATE_CUSTOMER": 

      return {...state,
        customers: state.customers.map(customer => customer.id === action.payload.id ? action.payload:customer)}
    default:
         return state
  }
}
 export class CustomerProvider extends Component {
    state = {customers : [
      ],
      dispatch : action => {
        this.setState(state => reducer(state,action))
      }
      
    }
    componentDidMount = async () =>{
const response =await axios.get("http://localhost:3000/customers")
this.setState  ({
  customers:response.data
})
}
    render() {
        return (
      <CustomerContext.Provider value = {this.state}>
          {this.props.children}
      </CustomerContext.Provider>
        )
    }
}
const CustomerConsumer = CustomerContext.Consumer;
export default CustomerConsumer;