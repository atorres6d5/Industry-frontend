import React from 'react';

const AdminActions = ({history}) => (
  <div className="container actionbuttons">
    <div className="row justify-content-center d-flex">
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary" onClick={()=>history.push('/lookUpProject')}>Look Up Project</button>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary" onClick={()=>history.push('/timeCards')}>Time Cards</button>
      </div>
    </div>
    <br/>
    <div className="row justify-content-center d-flex">
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary">Add Project</button>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary" onClick={()=>history.push('/newWorker')}>Add New Worker</button>
      </div>
    </div>
  </div>
);

export default AdminActions;
