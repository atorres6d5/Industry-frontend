import React from 'react';

const ActiveWorkers = ({ workers }) => (
  <div className="container">
    <div className="scorll">
      <table className="table">
        <thead >
          <tr className="sticky-top">
            <th scope="col">#</th>
            <th scope="col">Emp ID</th>
            <th scope="col">Time Clocked in</th>
            <th scope="col">Hours</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker, index)=>{
            return(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{worker.user_id}</td>
                <td>{worker.Clock_in}</td>
                <td>{worker.hours}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default ActiveWorkers;
