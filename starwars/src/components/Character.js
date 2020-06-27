// Write your Character component here
import React from 'react'


const Character = props => {


    return (
        <div className="container">
            <div className="font">Name: {props.starwarsChars[props.index].name} </div>
            <div className="font">Birth Year: {props.starwarsChars[props.index].birth_year}</div>
        </div>
    );
};
export default Character; 