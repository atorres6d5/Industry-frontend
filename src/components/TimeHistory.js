import React from 'react';

const TimeHistory = ({data}) => (
    <div className="container">
      <div className="scorll-admin ">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Emp #</th>
            <th scope="col">Date</th>
            <th scope="col">Clock In Time</th>
            <th scope="col">Clcok Out Time</th>
            <th scope="col">Hours Worked<br/>(HH:MM:SS)</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((log, index) => {
              const time = log.timeLogged
              return (<tr key={index}>
                <th scope="row">{log.Employee_id}</th>
                <td>{log.date}</td>
                <td>{log.Clock_in}</td>
                <td>{log.Clock_out}</td>
                <td>{`${time.hours}:${time.minutes}:${time.seconds}`}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  </div>

);

export default TimeHistory;
