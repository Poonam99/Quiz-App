import React from 'react';

const Home = () => {
    const Quiz-Topics= useLoaderData().data;
    return (
        <div>
            <div className='container'>
                <div className='container-title'>
                    <h1 className='details'>Become a Quiz topper you have to solve much quiz. </h1>
                </div>
                <div className='home-container'>
                    {
                        Quiz - topics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>
            </div>
            );
};

            export default Home;