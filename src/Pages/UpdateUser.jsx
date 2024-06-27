import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../Redux/userSlice';
import axios from 'axios';

const UpdateUser = () => {
const {id} = useParams();
const users = useSelector((state)=>state.users.users);
//to check the id
const user = users.find((ele)=>ele.id === id);
const dispatch = useDispatch();
const navigate = useNavigate();
const [name, setName] = useState(user.name);
const [email, setEmail]= useState(user.email);
const [age,setAge]= useState(user.age);

const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.put(`http://localhost:5000/api/update-user/${id}`,{name,email,age});
        dispatch(updateUser(response.data.result));
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
                        <input type="text" value={name} className="form-control" id="name" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={email} className="form-control" id="email" placeholder='Enter Your Email Id' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" value={age} className="form-control" id="age" placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
                
            </div>
          
        </div>
    );
};

export default UpdateUser;