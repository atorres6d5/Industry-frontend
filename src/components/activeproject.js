import React from 'react';

const ActiveProjects = ({projects}) => (<div className="container">
  <div className="scorll">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Project #</th>
          <th scope="col">Qty. Needed</th>
          <th scope="col">Customer</th>
          <th scope="col">Due Date</th>
          <th scope="col">Parts Made</th>
          <th scope="col">Scrap Count</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map((job, index) => {
            return (<tr key={index}>
              <th scope="row">{job.project_id}</th>
              <td>{job.Part_count}</td>
              <td>{job.customer}</td>
              <td>{job.due_date}</td>
              <td>{job.Parts_made}</td>
              <td>{job.scrap_parts}</td>
            </tr>)
          })
        }
      </tbody>
    </table>
  </div>
</div>);

export default ActiveProjects;
