import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimg from '../../../src/assets/dribbble_1.gif';

const NotF = () => {
    return (
        <div className="card bg-base-100  h-[620px] shadow-sm my-8 mx-auto">
            <figure className="px-10 mx-auto ">
                <img
                    src={notfoundimg}
            alt="comeing soon"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="jost-font-uppercase card-title text-5xl font-bold items-end ">4<span className="text-3xl font-bold text-red-700 ">0</span>4 <span className="text-3xl font-bold text-red-700 ">E</span>rror...</h2>
                <p className='jost-font-uppercase text-xl text-gray-500 my-3 border-y-2 py-1 border-dashed'>The page you're looking for doesn't exist.</p>
                <div className="card-actions">
                    <Link to="/" className="jost-font-uppercase text-2xl font-medium text-blue-900 border-2 rounded-xl py-1 px-6 bg-green-200 ">⬅ Go Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotF;