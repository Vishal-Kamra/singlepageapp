import React from 'react';
import { useLocation } from 'react-router';

const Recipe = (props) => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <div className='jumbotron container my-5 text-center'>
                <img src={location.state.recipe.image}></img><br></br>
                <h1 className='my-4 font-weight-light'>{location.state.recipe.label}</h1>
                <br></br>
                <h2 className='my-4 font-weight-light'>Calories</h2>
                <p className='col-sm-6 mx-auto'>
                    <li className='text-left'>{location.state.recipe.calories}</li>
                </p>
                <br></br>    
                <h2 className='my-4 font-weight-light'>Ingredients</h2>
                <p className='col-sm-6 mx-auto'>{location.state.recipe.ingredients.map((ingredient,index) => <li key={index} className='text-left'>{ingredient.text}</li>)}</p>
            </div>
        </div>
    )
}

export default Recipe