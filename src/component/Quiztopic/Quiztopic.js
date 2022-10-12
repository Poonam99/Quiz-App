import React from 'react';
import { Link } from 'react-router-dom';
import "./Quiztopic.css"

const Quiztopic = ({ item }) => {
    const { id, logo, name, total } = item
    return (
        <div className='topic-container'>
            <div>
                <img src={logo} alt="" />
                <div className='text'>
                    <h4><small>{name}</small></h4>
                    <p><small> Total Quiz : {total}</small></p>
                </div>
                <Link className='quiz-btn' to={`../home/${id}`}>Attend Quiz</Link>
            </div>
        </div>
    );
};

export default Quiztopic;