import React from 'react';

import spinner from "../gif/spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="spinner"/>
        </div>
    );
};

export default Loader;