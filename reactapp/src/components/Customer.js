import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CustomerConsumer from '../context';
import axios from "axios";
import {Link} from  "react-router-dom";

 class Customer extends Component {
     state = {

        isVisible: false
     }
    static defaultProps = {
        name : "bilgi yok",
        age : "bilgi yok",
        job : "bilgi yok",
        comname : "bilgi yok",
        taxnumber : "bilgi yok",
        adress : "bilgi yok",
        phone : "bilgi yok",
      
    }
    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isVisible: false
    //     }
    // }
    onClickEvent= (e) =>{
       this.setState( {
           isVisible : !this.state.isVisible
    })}
    
      onDeleteCustomer =async (dispatch) => {
         const {id} = this.props;
      
      
         await  axios.delete(`http://localhost:3000/customers/${id}`);
       dispatch({type : "DELETE_CUSTOMER", payload:id});
    
     
      }
   
    
    render() { 
        //destructing
        const{id,name,job,age,comname,taxnumber,phone,adress} = this.props;
       const {isVisible} = this.state;
      
        return (<CustomerConsumer>
{
    value => {
        const {dispatch} =value;
        return (
           
            <div className="col-md-8 mb-4" > 
   
            <div className="card" style={isVisible ? { backgroundColor:"grey", color: "black"} :null}>
            <div className="card-header d-flex justify-content-between">
        <h4 className="D-inline " onClick ={this.onClickEvent}>{name}</h4>
        <i onClick = {() => {if (window.confirm('Are You Sure?')){axios.delete(`http://localhost:3000/customers/${id}`);
       dispatch({type : "DELETE_CUSTOMER", payload:id})} ;}}  className="fas fa-trash-alt" style={{cursor:"pointer"}}> </i>
        
            </div>
           { isVisible ?
            <div className="card-body">
                 <p className="card">Company Name: {comname}</p>
            <p className="card">Phone Number: {phone}</p>
   <p className="card">Address: {adress}</p>
   <p className="card">Tax Number: {taxnumber}</p>
            <p className="card">Job: {job}</p>
   <p className="card">Age: {age}</p>
   <Link to ={ `edit/${id}`} className="btn btn-dark btn-block">Update Customer</Link>
           

   
            </div>: null}
            </div>
            </div>
        )

    }
}
        </CustomerConsumer>)
       
    }
}


Customer.propTypes ={
    name : PropTypes.string.isRequired,
   age: PropTypes.number.isRequired,
    job: PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
    comname : PropTypes.string.isRequired,
    phone : PropTypes.string.isRequired,
   adress: PropTypes.string.isRequired,
    
    taxnumber : PropTypes.string.isRequired

}
export default Customer;
