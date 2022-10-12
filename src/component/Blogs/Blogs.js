import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div classname='blogs-container'>
            <div className='blogs'>
                <h1>What is the purpose of React Router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library for routing in React.React router can be an overkill for certain projects where all you need is basic navigation and routing functionalities. In that context, React Router is not necessary at all.</p>
            </div>
            <div className='blogs'>
                <h1>How does context API works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.The main purpose of using context API is avoiding 'prop drilling' – passing prop at every level.</p>
            </div>
            <div className='blogs'>
                <h1>What is useRef hook?</h1>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blogs;