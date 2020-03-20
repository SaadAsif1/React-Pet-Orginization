import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Forms from "./Components/User Data/Forms";
import Owners from "./Components/Owners/OwnersList";
import OwnerInfo from "./Components/Owners/OwnerFile";
import AddNewPet from "./Components/Owners/Links/AddNewPet";
import GoToNewPet from "./Components/Owners/Links/GoToNewPet";
import EditOwner from "./Components/Owners/Links/EditOwner";
import Veterinarians from "./Components/Info/Veterinarians";
import AddVsit from "./Components/Owners/Links/AddVisit";
import "./App.css";

class App extends Component {
  state = {
    users: [
      {
        name: "Ahmed Asif",
        adress: "4052, Antiem St.",
        states: "CA",
        city: "San Deigo",
        phone: "8582498784",
        nameP: "Charle",
        birthD: "2017-08-09",
        typeP: "Cat",
        dateV: "2019-01-12",
        des: "Checkup",
        id: "2131231"
      },
      {
        name: "Ahmed bob",
        adress: "4052, Antiem St.",
        states: "CA",
        city: "San Deigo",
        phone: "8582498784",
        nameP: "Charle",
        birthD: "2017-08-09",
        typeP: "Cat",
        dateV: "2019-01-12",
        des: "Checkup",
        id: "213123asdas1"
      }
    ],
    current: "",
    AddNewPet: "",
    nName: "",
    newPet: "",
    eId: "",
    newDes: "",
    currenteId: "",
    newVisit: ""
  };

  userData = data => {
    let user = [...this.state.users, data];
    this.setState({ users: user });
  };

  // add new pet
  addNewPet = (pet, id) => {
    let user = [...this.state.AddNewPet, pet];
    this.setState({ AddNewPet: user });
    this.setState({ eId: id });
  };

  // delete Item
  deleteItems = id => {
    const user = this.state.users.filter(item => item.id !== id);
    this.setState({ users: user });
  };

  // delete Item
  deleteItem = id => {
    const user = this.state.AddNewPet.filter(item => item.eId !== id);
    this.setState({ AddNewPet: user });
  };

  // Name
  use = current => {
    this.setState({ current });
  };

  // new Name
  newPet = (name, id) => {
    this.setState({ newPet: name });
  };

  // new Name
  newName = name => {
    this.setState({ nName: name });
  };

  // add Description
  addDes = des => {
    this.setState({ newDes: des });
  };

  //current eID
  AddVisiteId = Id => {
    this.setState({ currenteId: Id });
  };

  // newVisit
  newVisit = news => {
    let user = [...this.state.newVisit, news];
    this.setState({ newVisit: user });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Forms userData={this.userData} />}
            />
            <Route
              exact
              path='/owners'
              render={() => (
                <Owners
                  users={this.state.users}
                  deleteItems={this.deleteItems}
                  use={this.use}
                  newName={this.state.nName}
                />
              )}
            />
            <Route
              exact
              path='/oinfo'
              render={() => (
                <OwnerInfo
                  userInfo={this.state.current}
                  AddNewPet={this.state.AddNewPet}
                  newName={this.state.nName}
                  newPet={this.state.newPet}
                  eId={this.state.eId}
                  newDes={this.state.newDes}
                />
              )}
            />
            <Route
              exact
              path='/AddNewPet'
              render={() => (
                <AddNewPet
                  userInfo={this.state.current}
                  addNewPet={this.addNewPet}
                  newName={this.state.nName}
                />
              )}
            />
            <Route
              exact
              path='/AddVisit'
              render={() => (
                <GoToNewPet
                  userInfo={this.state.current}
                  AddNewPet={this.state.AddNewPet}
                  deleteItem={this.deleteItem}
                  AddVisiteId={this.AddVisiteId}
                  news={this.state.newVisit}
                />
              )}
            />
            <Route
              exact
              path='/EditOwner'
              render={() => (
                <EditOwner
                  newName={this.newName}
                  userInfo={this.state.current}
                />
              )}
            />
            <Route
              exact
              path='/Veterinarians'
              render={() => <Veterinarians />}
            />
            <Route
              exact
              path='/AddVsiters'
              render={() => (
                <AddVsit
                  userInfo={this.state.current}
                  AddNewPet={this.state.AddNewPet}
                  AddVisiteId={this.state.currenteId}
                  newVisit={this.newVisit}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
