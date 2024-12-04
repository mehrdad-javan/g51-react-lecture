import React from 'react'
import {BrowserRouter as Router, Link, Route,Routes, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import InvitationList from './InvitationList';
import Dashboard from './Dashboard';

const RouterDemo = () => {
  return (
    
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/invitations' element={<InvitationList />} />
            <Route path='/dashboard/*' element={<Dashboard />} />

            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </Router>
  )
}


const Home = ()=> {

   const navigate = useNavigate();

    const goToDashboard = () => {
        console.log('navigate to dashboard component');
        navigate('/dashboard');
    }

    return (<div className='container'>
        <h1>Home Component</h1>
        <div className='btn-group'>
            <button className='btn btn-outline-primary' onClick={() => goToDashboard()}>Navigate To Dashboard</button>
            <button className='btn btn-outline-danger' onClick={() => navigate(-1) }>Back</button>

        </div>
    </div>);
}


const About = ()=> {
    return (<div className='container'>About Component</div>);
}


const PageNotFound = ()=> {
    return (<div className='container'>PageNotFound Component</div>);
}


export default RouterDemo