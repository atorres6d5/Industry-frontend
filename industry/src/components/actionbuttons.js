import React from 'react';

const ActionButtons = ({lookUp, openModal, claimScrap, endProject, history}) => (
  <div className="container actionbuttons">
    <div className="row justify-content-center d-flex">
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary" onClick={()=>history.push('/lookUpProject')}>{lookUp}</button>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary" onClick={openModal}>Log into Project</button>
      </div>
    </div>
    <br/>
    <div className="row justify-content-center d-flex">
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary">Claim Parts</button>
      </div>
      <div className="col-6">
        <button type="button" onClick={endProject} className="btn btn-block btn-secondary">Log out Project</button>
      </div>
    </div>
  </div>
);

export default ActionButtons;
