import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz
    const notify = (ans) => {
        let correctanswer = JSON.stringify(correctAnswer)
        correctanswer = correctanswer.replace(/\s+/g, ' ').trim();
        if (JSON.stringify(ans) === correctanswer) {
            toast(" true answer");

        }
        else {
            toast("false answer");

        }

    };
    const rightAns = (correctAnswer) => toast(correctAnswer);

    return (
        <div className='quiz-container'>
            <div className='Quiz'>
                <h2>{question}</h2>
                <div className='icon'>
                    <EyeSlashIcon onClick={() => rightAns(correctAnswer)} />
                </div>
            </div>
            <div className='options'>
                {
                    options.map((option, index) => <button onClick={(e) => { notify(e.target.innerText) }} key={index}>{option}</button>)

                }
            </div>
        </div >
    );
};

export default Quiz;