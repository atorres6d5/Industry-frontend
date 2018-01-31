import React from 'react';

const ProjectLogin = ({send, handleProject, projectID, close}) => (<div>
  <form onSubmit={send}>
    <div className="form-group">
      <label>Project #</label>
      <input type="number" className="form-control" placeholder="Project #" onChange={handleProject} value={projectID}/>
    </div>
    <div className="row justify-content-around">
      <button type="submit" className="btn btn-primary col-3">Add Project</button>
      <button type="submit" className="btn btn-danger col-3" onClick={close}>Cancel</button>
    </div>
  </form>
</div>);

export default ProjectLogin;
