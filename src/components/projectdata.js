import React from 'react';
const moment = require('moment')

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
          <th scope="col">Scrap Count</th>
          <th scope="col">Labor Hours</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map((project, index) => {
            const hours = moment.duration(project.labor_hours)._data.hours
            const minutes = moment.duration(project.labor_hours)._data.minutes
            return (<tr key={index}>
              <th scope="row">{project.id}</th>
              <td>{project.Part_count}</td>
              <td>{project.customer}</td>
              <td>{project.due_date.slice(0, 10)}</td>
              <td>{project.Parts_made}</td>
              <td>{project.scrap_parts}</td>
              <td>{`${hours}:${minutes}`}</td>
            </tr>)
          })
        }
      </tbody>
    </table>
  </div>
</div>);

export default ProjectData;
