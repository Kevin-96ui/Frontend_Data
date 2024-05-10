import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Log() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [store,setStore] = useState([]);
    const navigate = useNavigate(); 

    useEffect(()=>{
        axios.get('https://backend-data-zyf0.onrender.com/user')
        .then((res)=>{
            setStore(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(store.find((e)=>e.email === email &&  e.password === password)){
            console.log("Success");
            alert("Successfully Logged In!")
            toast.success("Successfully Logged In!");
            navigate('/Dashboard');
        }else{
            toast.error("Invalid Email or Password!");
        }
    }
  return (
    <div>
      <h1>Login Form</h1>
      <div>
      <form className="loginform" onSubmit={handleSubmit}>
        <TextBoxComponent
          type="email"
          placeholder="Email address"
          floatLabelType="Auto"
          width={400}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextBoxComponent
          type="password"
          placeholder="Password"
          floatLabelType="Auto"
          width={400}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="e-btn e-info" style={{ margin: 10 ,width:400 }}>
          Log In
        </button>
        <ToastContainer />
      </form>
      </div>
    </div>
  );
}
