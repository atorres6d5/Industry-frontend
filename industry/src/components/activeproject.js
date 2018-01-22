import React from 'react';

const ActiveProjects = ({projects}) => (
  <div className="container">
    <div className="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Project #</th>
            <th scope="col">Qty. Needed</th>
            <th scope="col">Customer</th>
            <th scope="col">Due Date</th>
            <th scope="col">Parts Made</th>
            <th scope="col">Add To Count</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(job=>{
            return(
              <tr>
                <th scope="row">{job.id}</th>
                <td>{job.Part_count}</td>
                <td>{job.customer}</td>
                <td>{job.due_date}</td>
                <td>{job.Parts_made}</td>
                <td><button type="button" class="btn btn-success">+</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default ActiveProjects;
