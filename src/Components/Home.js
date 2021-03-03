import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './../CSS/home.css';

const Home = () => {
    const [name, setName] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
		console.log(name);
    }

    return (
        <div className='container mt-5'>
            <input type='text' placeholder='Enter your name !' className='form-control' value={name} onChange={updateName}></input>
            <p className='display-4 text-info mt-5 text-uppercase'>Hi! {(name!='')?
                name :'There'
            }</p>
            <div className='jumbotron shadow'>
                <h1 className='font-weight-light text-white back'>Check Out Some Interesting Recipes From Edmam</h1>
                <Link to='/edmam-recipe' className='btn mt-5 btn-primary button'>Visit</Link>
            </div>
        </div>
    )
}

export default Home