import React from 'react';
import code from '../assets/code2.png';

const Works = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Work
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Tixfix
                            </span>
                            <p className='text-center'>Support ticket management system developed using React NodeJS and MySQL.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/smshweta/tixfix'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                GroceSave
                            </span>
                            <p className='text-center'> Smart grocery assistant for saving money. Built with Java, Python, React, and AWS."</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/smshweta/GroceSave'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Weather_App_React
                            </span>
                            <p className='text-center'>
                                React Weather App: A user-friendly weather application built with React for instant weather updates and forecasts.</p>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/smshweta/Weather_App_React'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Works;