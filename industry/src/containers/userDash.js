import React, {Component} from 'react';
import Worker from '../components/Worker';
import ActionButtons from '../components/actionbuttons';
import ActiveProjects from '../components/activeproject';
import ReactModal from 'react-modal'
import ProjectLogin from '../modals/projectLogin'
import ProjectLogout from '../modals/projectLogout'

const axios = require('axios')
const devURL=process.env.REACT_APP_API_URL
const moment = require('moment')

class UserDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clockInTime: null,
      name: null,
      hireDate: null,
      img: "",
      token: localStorage.getItem('Industry Token'),
      empID: null,
      projects: [],
      showModal: false,
      showLogOut: false,
      projectID: "",
      claimParts: 0,
      scrap: 0

    }
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => {
    this.setState({showModal: true});
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleOpenLogOut = () => {
    this.setState({showLogOut: true});
  }

  handleCloseLogOut = () => {
    this.setState({showLogOut: false});
  }

  handleProject = (e) => {
    this.setState({"projectID": e.target.value})
  }

  handleClaimParts = (e) => {
    this.setState({claimParts: e.target.value})
  }

  handleScrap = (e) => {
    this.setState({scrap: e.target.value})
  }

  projectLogin = async (e) => {
    e.preventDefault()
    const input = parseInt(this.state.projectID)
    const token = localStorage.getItem('Industry Token')
    await axios.post(`${devURL}/api/login/project/${input}`, {user_id: this.state.empID}).then(result => {
      if (result.data.message) {
        console.log(result, 'yo')
        return alert(`Already logged into Project # ${input}`)
      } else {
        console.log(result.data, "here bug");
        result.data.forEach(project => {
          project.due_date = moment(project.due_date).format("MM-DD-YYYY")
        })
        this.setState({projects: result.data})
        this.handleCloseModal()
      }
    })
  }

  logOutProject = async (e) => {
    e.preventDefault()
    const Parts_made = this.state.claimParts
    const scrap = this.state.scrap
    const project_id = e.target.project_id.value

    Promise.all([
      axios.put(`${devURL}/api/count/update/${project_id}`, {
        count: Parts_made,
        scrap: scrap,
        user_id: this.state.empID
      }),
      axios.put(`${devURL}/api/logout/project/${project_id}`, {
        count: Parts_made,
        scrap: scrap,
        user_id: this.state.empID,
        project_id: project_id
      })
    ]).then(result => {
      const res = result[1].data
      // console.log(res)
      this.handleCloseLogOut()
      alert(`logged out of Project: ${res.project_id}`)
      this.forceUpdate()
    })
  }

  activeProjects = async () => {
    const empID = this.state.empID
    await axios.get(`${devURL}/api/active/projects/${empID}`).then(result => {
      console.log(result)
      result.data.forEach(project => {
        project.due_date = moment(project.due_date).format("MM-DD-YYYY")
      })
      this.setState({projects: result.data})
    })
  }

  async decodeToken() {
    const token = this.state.token
    await axios.get(`${devURL}/logs/clockIn/token`, {headers: {
        token
      }}).then(result => {
      this.setState({empID: result.data.id})
    })
  }

  async getWorkerData(id) {
    await axios.get(`${devURL}/admin/getUser/${id}`).then(result => {
      console.log(result)
      this.setState({
        name: result.data.name,
        hireDate: result.data.created_at.slice(0, 10),
        img: result.data.img
      })
    })
  }

  async componentWillMount() {
    await this.decodeToken()
    await this.getWorkerData(this.state.empID)
    await this.activeProjects()
  }

  clockOut = async () => {
    await axios.post(`${devURL}/logs/clockOut/${this.state.empID}`).then(localStorage.removeItem('Industry Token'), localStorage.removeItem('clockIn')).then(this.props.history.push('/login'))
  }

  logOut = () => {
    localStorage.removeItem('Industry Token')
    this.props.history.push('/login')
  }

  render() {
    return (<div className="container dashboard">
      <div className="row justify-content-between">
        <div className="col-5">
          <div className="row">
            <Worker clockTime={moment.utc(localStorage.getItem('clockIn')).format("HH:mm:ss")} picture={this.state.img} name={this.state.name} hireDate={this.state.hireDate}/>
          </div>
        </div>
        <div className="col-5 d-flex align-items-center">
          <ActionButtons lookUp="look up Project" openModal={this.handleOpenModal} endProject={this.handleOpenLogOut} history={this.props.history}/>
        </div>
      </div>
      <br/>
      <div className="row justify-content-center">
        <div className="col-10">
          <ActiveProjects projects={this.state.projects}/>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-3 d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={this.logOut}>Log Out</button>
          <button type="button" className="btn btn-warning" onClick={this.clockOut} disabled={this.state.projects.length
              ? "disabled"
              : ""}>Clock Out</button>
        </div>
      </div>
      <div className="container">
        <ReactModal isOpen={this.state.showModal} contentLabel="Login Project" onRequestClose={this.handleCloseModal}>
          <ProjectLogin send={this.projectLogin} handleProject={this.handleProject} close={this.handleCloseModal}/>
        </ReactModal>
      </div>
      <div className="container">
        <ReactModal isOpen={this.state.showLogOut} contentLabel="Logout Project" onRequestClose={this.handleCloseLogOut}>
          <ProjectLogout logOut={this.logOutProject} handleProject={this.handleProject} projectID={this.state.projectID} handleClaimParts={this.handleClaimParts} claimParts={this.state.claimParts} handleScrap={this.handleScrap} scrap={this.state.scrap} handleCloseLogOut={this.handleCloseLogOut} projects={this.state.projects}/>
        </ReactModal>
      </div>
    </div>);
  }

}

export default UserDash;
