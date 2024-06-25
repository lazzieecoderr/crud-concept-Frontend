import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users';
import CreateUser from './Pages/CreateUser';
import UpdateUser from './Pages/UpdateUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path = '/update/:id' element={<UpdateUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;