import React from 'react';

const Worker = ({picture, name, hireDate, clockTime}) => (
  <div className='container workerData'>
    <div className="row justify-content-center">
      <div className="col">
        <p>Clocked In at: {clockTime}</p>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-2">
        <div className="text-center">
          <img src='./images/ComingSoon.jpg' className="rounded" alt=""/>
        </div>
      </div>
    </div>
  </div>
);

export default Worker;
