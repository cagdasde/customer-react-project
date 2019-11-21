import React, { Component } from 'react'

import CustomerConsumer from "../context";
import axios from "axios";


class UpdateCustomer extends Component {
    state ={
       
        name:"",
        age:"",
        job:"",
        comname:"",
        taxnumber:"",
        phone:"",
        adress:""
    }
   
    
    changeInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }
    componentDidMount =async () => {
        const {id} = this.props.match.params;
        const response =await axios.get(`http://localhost:3000/customers/${id}`);
const {name,age,job,comname,taxnumber,phone,adress}= response.data;
this.setState({
    name,
    age,
    job,
    comname,
    taxnumber,
    phone,
    adress
});
    }
    validateForm =() =>{
        const {name,age,job,comname,taxnumber,phone,adress} = this.state;
        if (name ==="" || age ==="" || job==="" || comname ==="" || taxnumber ==="" || phone ===""|| adress ===""){
            return false;

        }
        return true;
    }
UpdateCustomer = async (dispatch,e) => {
   e.preventDefault();
   const {name,age,job,comname,taxnumber,phone,adress} = this.state;
   const {id} = this.props.match.params;
   const updatedCustomer= {
    comname,
    phone,
    taxnumber,
    adress,  
    name,
       job,
       age
       
   };
   if (!this.validateForm()){
    this.setState({
        error:true
    })
    return;
}
   const response =await axios.put(`http://localhost:3000/customers/${id}` ,updatedCustomer);
   dispatch({type:"UPDATE_CUSTOMER",payload : response.data});
   
   this.props.history.push("/");
}
    render() {
        const {name,age,job,comname,taxnumber,phone,adress,error} = this.state;
       return <CustomerConsumer>
           {
               value =>{
                   const{dispatch} = value;
                return (
                    <div className="col-md-8 mb-4">
            
                       
                            <div className="card-header">
                                <h4>Update Customer Form</h4>
        
                            </div>
                            {
    error ? 
    <div className="alert alert-danger">lütfen bilgilerini kontrol ediniz..</div> :null
}
                            <div className="card-body">
                                <form onSubmit ={this.UpdateCustomer.bind(this,dispatch)} >
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="id"
                                            placeholder="Enter Name"
                                            className="form-control"
                                            value={name}
        onChange ={this.changeInput}
                                        />
                                    </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor="job">Job</label>
                                        <input
                                            type="text"
                                            name="job"
                                            id="id"
                                            placeholder="Enter Job"
                                            className="form-control"
                                            value={job}
                                            onChange ={this.changeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Age">Age</label>
                                        <input
                                            type="text"
                                            name="age"
                                            id="id"
                                            placeholder="Enter Age"
                                            className="form-control"
                                            value={age}
                                            onChange ={this.changeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comname">Company Name</label>
                                        <input
                                           type="text"
                                           name="comname"
                                           id="id"
                                           placeholder="Enter Company Name"
                                           className="form-control"
                                           value={comname}
        onChange ={this.changeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="phone">Phone number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="id"
                                            placeholder="Enter Phone Number"
                                            className="form-control"
                                            value={phone}
                                            onChange ={this.changeInput}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="adress">Address</label>
                                        <input
                                            type="text"
                                            name="adress"
                                            id="id"
                                            placeholder="Enter Company Address"
                                            className="form-control"
                                            value={adress}
                                            onChange ={this.changeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="taxnumber">Tax Number</label>
                                        <input
                                            type="text"
                                            name="taxnumber"
                                            id="id"
                                            placeholder="Enter Tax Number"
                                            className="form-control"
                                            value={taxnumber}
                                            onChange ={this.changeInput}
                                        />
                                    </div>
                                    <button className="btn btn-danger btn-block" type ="submit">Update Customer</button>
                                </form>
                            </div>
                        </div>
                        
                   
                )
               }
           }
       </CustomerConsumer>
       
       
    }
}
export default UpdateCustomer;
