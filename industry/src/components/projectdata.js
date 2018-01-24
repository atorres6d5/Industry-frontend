import React from 'react';

const ProjectData = ({projects}) => (
  <div className="container">
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Project #</th>
            <th scope="col">Qty. Needed</th>
            <th scope="col">Customer</th>
            <th scope="col">Due Date</th>
            <th scope="col">Parts Made</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index)=>{
            return(
              <tr key={index}>
                <th scope="row">{project.id}</th>
                <td>{project.Part_count}</td>
                <td>{project.customer}</td>
                <td>{project.due_date.slice(0,10)}</td>
                <td>{project.Parts_made}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default ProjectData;
