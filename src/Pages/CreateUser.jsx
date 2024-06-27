import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Redux/userSlice';
import axios from 'axios';

const CreateUser = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

const [name, setName] = useState();
const [email, setEmail]= useState();
const [age,setAge]= useState();

const handleSubmit = async(e)=>{
e.preventDefault();
try {
    const response = await axios.post("http://localhost:5000/api/create-user",{name,email,age})
    dispatch(createUser(response.data.result));
    navigate('/');
} catch (error) {
    console.log(error);
}
}

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter Your Email Id' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Create</button>
                </form>
                
            </div>
          
        </div>
    );
};

export default CreateUser;