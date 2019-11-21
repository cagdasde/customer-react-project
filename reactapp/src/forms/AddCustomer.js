import React, { Component } from 'react'
import posed from "react-pose";
import CustomerConsumer from "../context";
import axios from "axios";
const Animation = posed.div({
    visible : {
        opacity : 1,
        applyAtStart :{
            display :"block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtStart :{
            display :"none"
        }
    }
});

class AddCustomer extends Component {
    state ={
        visible:false,
        name:"",
        job:"",
        age:"",
        comname:"",
        phone:"",
        taxnumber:"",
        adress:"",
        error : false
    }
    changeVisibility = (e) =>{
        this.setState({
            visible:!this.state.visible
        })
    }
    validateForm =() =>{
        const {name,job,age,comname,taxnumber,phone,adress} = this.state;
        if (name ==="" || age ==="" || job==="" || comname ==="" || taxnumber ==="" || phone ===""|| adress ===""  ){
            return false;

        }
        return true;
    }
    changeInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }
    AddCustomer = async (dispatch,e) => {
   e.preventDefault();
    const {name,job,age,comname,taxnumber,phone,adress} = this.state;
    const newCustomer ={
       
        name: name,
        age: age,
        job: job,
        comname: comname,
        adress: adress,
       taxnumber: taxnumber,
        phone: phone
    }
    if (!this.validateForm()){
        this.setState({
            error:true
        })
        return;
    }
    const response = await axios.post("http://localhost:3000/customers",newCustomer);

    
    dispatch({type:"ADD_CUSTOMER", payload : response.data })
this.props.history.push("/");
}
    render() {
        const {visible,name,age,comname,taxnumber,phone,adress,job,error} = this.state;
       return <CustomerConsumer>
           {
               value =>{
                   const{dispatch} = value;
                return (
                    <div className="col-md-8 mb-4">
             
            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Company " : "Show Company"}</button>
                       <div className="card">
                            <div className="card-header">
                                <h4>Add Customers Form</h4>
        
                            </div>
{
    error ? 
    <div className="alert alert-danger">lütfen bilgilerini kontrol ediniz..</div> :null
}
                            <div className="card-body">
                                <form onSubmit ={this.AddCustomer.bind(this,dispatch)} >
                              
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
                                        <label htmlFor="age">Age</label>
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
                                     <Animation pose ={visible ? "visible": "hidden"}>
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
                                    </Animation> 
                                
                                    <button className="btn btn-danger btn-block" type ="submit">Add Customer</button>
                                </form>
                            </div>
                        </div>
                       
                    </div>




                )
               }
           }
       </CustomerConsumer>
       
       
    }
}
export default AddCustomer
