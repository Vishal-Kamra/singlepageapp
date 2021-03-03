import React, {useEffect, useState} from 'react';
import './../CSS/recipes.css';
import {Link} from 'react-router-dom'

const Recipes = () => {

    const App_Id = '59f0f015';
    const App_Key = '85a14653f15dcf5b4ed44d122965fb99';

    const [query, setQuery] = useState('banana');
    const [key, setKey] = useState('banana');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        Api_Req()
    }, [query])

    const Api_Req= async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateinput = (e) => {
        setKey(e.target.value);
    }

    const updatequery = (e) => {
        e.preventDefault();
        setQuery(key);
    }

    return (
        <React.Fragment>
            <div className='container my-5'>
                <form className='form-inline' onSubmit={updatequery}>
                    <input type='text' className='form-control col-sm-8' value={key} onChange={updateinput}></input>
                    <input type='submit' className='form-control btn-info ml-2'></input>
                </form>
                <div className='collection'>
                {recipes.map(recipe =>
                    <div className='card my-5 mr-2 px-0' key={recipe.recipe.label}>
                    <img className='card-img-top' src={recipe.recipe.image}></img>
                    <div className='card-body'>
                        <div className='card-title'>{recipe.recipe.label}</div>
                        <Link to={{pathname:'/recipe', state:recipe}} className='btn btn-primary'>View</Link></div>
                    </div>) }
                </div>    
            </div>
        </React.Fragment>
    )
}

export default Recipes 