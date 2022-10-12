import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiztopic from '../Quiztopic/Quiztopic';


const Home = () => {
    const items = useLoaderData().data;
    return (
        <div>
            <div className='header-container'>
                <div className='header-title'>
                    <h1 className='details'> Become a winner you have to Solve much Quiz</h1>
                </div>
            </div>
            <div className='home-container'>
                {
                    items.map(item => <Quiztopic
                        key={item.id}
                        item={item}
                    ></Quiztopic>)
                }
            </div>
        </div>
    );
};

export default Home;

