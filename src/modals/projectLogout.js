import React from 'react';

const ProjectLogout = ({
  logOut,
  handleProject,
  projectID,
  handleClaimParts,
  claimParts,
  handleScrap,
  scrap,
  handleCloseLogOut,
  projects
}) => (<div>
  <form onSubmit={logOut}>
    <div className="form-group">

      {/* <label>Project #</label>
        <input name="project_id" type="number" className="form-control" placeholder="Project #" onChange={handleProject} value={projectID}/> */
      }

      <div className="form-group">
        <label>Project #</label>
        <select className="form-control" name="project_id" onChange={handleProject}>
          {
            projects.length
              ? projects.map((project, index) => {
                return <option key={index}>{project.project_id}</option>
              })
              : null
          }

        </select>
      </div>

      <label>Parts to Claim</label>
      <input type="number" className="form-control" placeholder="###" onChange={handleClaimParts} value={claimParts}/>

      <label>Non Conforming Parts</label>
      <input type="number" className="form-control" placeholder="Project #" onChange={handleScrap} value={scrap}/>

    </div>
    <div className="row justify-content-around">
      <button type="submit" className="btn btn-primary col-3">Claim Activity</button>
      <button type="submit" className="btn btn-danger col-3" onClick={handleCloseLogOut}>Cancel</button>
    </div>
  </form>
</div>);

export default ProjectLogout;
