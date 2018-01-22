import React from 'react';

const ActionButtons = ({lookUp, logProject, claimScrap, endProject}) => (
  <div className="container actionbuttons">
    <div className="row justify-content-center d-flex">
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary">{lookUp}</button>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary">{logProject}</button>
      </div>
    </div>
    <br/>
    <div className="row justify-content-center d-flex">
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary">{claimScrap}</button>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-block btn-secondary">{endProject}</button>
      </div>
    </div>
  </div>
);

export default ActionButtons;
