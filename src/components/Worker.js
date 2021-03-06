import React from 'react';

const Worker = ({picture, name, hireDate, clockTime}) => (
  <div className='container workerData'>
    <div className="row justify-content-start">
      <div className="col-10">
        <p>Clocked In at: {clockTime}
        <br/>
        Name: {name}
        <br/>
        Hire Date: {hireDate}</p>
      </div>
    </div>
    <div className="row justify-content-start">
      <div className="col-2">
        <div className="text-center">
          <img src={picture} className="rounded" alt=""/>
        </div>
      </div>
    </div>
  </div>
);

export default Worker;
