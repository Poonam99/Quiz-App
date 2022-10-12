import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

import './MoreQuiz.css'

const MoreQuiz = () => {
    const moreQuiz = useLoaderData();
    console.log(moreQuiz)
    const { name } = moreQuiz.data;

    return (
        <div>
            {
                <h1>{name}</h1>
            }
            <div className='main-container'>
                <div className='qus-container'>
                    {
                        moreQuiz.data.questions.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}


                        ></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MoreQuiz;