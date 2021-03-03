import React from 'react';

const bottom = {
    position:'fixed',
    bottom:'0',
    left:'0',
    textAlign:'center',
    width:'100%'
}

const Footer = () => {
    return (
        <div className='container-fluid bg-primary mt-5 text-light' style={bottom}>
            Copyright &copy; 2020, Vishal
        </div>
    )
}

export default Footer