import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddNewPet extends Component {
  state = {
    name: "",
    birth: "",
    select: "",
    dec: "",
    visitP: "",
    id: this.props.userInfo.id,
    eId: Math.random()
  };

  name = e => this.setState({ name: e.target.value });
  birth = e => this.setState({ birth: e.target.value });
  select = e => this.setState({ select: e.target.value });
  dec = e => this.setState({ dec: e.target.value });
  visitP = e => this.setState({ visitP: e.target.value });

  btnClicked = () => {
    if (
      this.state.name === "" ||
      this.state.birth === "" ||
      this.state.select === "" ||
      this.state.dec === "" ||
      this.state.visitP === ""
    ) {
      console.log("error");
    } else {
      this.setState({ eId: Math.random() });
      console.log(this.state.eId);
      this.props.addNewPet(this.state, this.state.eId);

      this.setState({
        name: "",
        birth: "",
        select: "",
        dec: "",
        visitP: ""
      });
    }
  };

  render() {
    const { userInfo, newName } = this.props;
    return (
      <div
        className='row'
        style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}
      >
        <Link to='/oinfo'>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
            style={{ background: "#333", marginBottom: "2rem" }}
          >
            <i className='fas fa-arrow-left' /> Go Back
          </button>
        </Link>

        <h5>New Pet</h5>
        <div className='col s12 collection' style={{ background: "#f4f4f4" }}>
          <p className='collection-item' style={{ background: "#f4f4f4" }}>
            <span className='badge '>
              <span className='bold' style={{ marginRight: "10rem" }}>
                {newName === ""
                  ? userInfo.name
                  : newName.nameU === userInfo.id
                  ? newName.name
                  : userInfo.name}
              </span>
            </span>
            <span className='bold'>Owner:</span>
          </p>
        </div>

        {/* Name */}
        <div className='input-field col s6' style={{ margin: "2rem 0" }}>
          <input
            id='first_name2'
            type='text'
            className='validate'
            onChange={this.name}
            value={this.state.name}
          />
          <label className='active' htmlFor='first_name2'>
            Pet Name
          </label>
        </div>

        {/* Description */}
        <div
          className='input-field col s6'
          style={{ margin: "2rem 0", marginBottom: "3rem" }}
        >
          <input
            id='first_name2'
            type='text'
            className='validate'
            onChange={this.dec}
            value={this.state.dec}
          />
          <label className='active' htmlFor='first_name2'>
            Description
          </label>
        </div>

        {/* BirthDay */}
        <div
          className='input-field col s6'
          style={{ margin: "2rem 0", marginBottom: "3rem" }}
        >
          <input
            id='first_name2'
            type='date'
            className='validate'
            placeholder='YYYY-MM-DD'
            onChange={this.birth}
            value={this.state.birth}
          />
          <label className='active' htmlFor='first_name2'>
            Birth Day
          </label>
        </div>

        {/* Pet Visit */}
        <div
          className='input-field col s6'
          style={{ margin: "2rem 0", marginBottom: "3rem" }}
        >
          <input
            id='first_name2'
            type='date'
            className='validate'
            placeholder='YYYY-MM-DD'
            onChange={this.visitP}
            value={this.state.visitP}
          />
          <label className='active' htmlFor='first_name2'>
            Pet Visit
          </label>
        </div>

        {/* Pet Type */}
        <div>
          <select
            class='browser-default'
            onChange={this.select}
            style={{ border: "solid black 1px" }}
            value={this.state.select}
          >
            <option value='' disabled selected>
              Choose Your Pet Type
            </option>
            <option value='brid'>brid</option>
            <option value='cat'>cat</option>
            <option value='dog'>dog</option>
            <option value='hamster'>hamster</option>
            <option value='snake'>snake</option>
            <option value='lizard'>lizard</option>
          </select>
        </div>

        <button
          className='btn waves-effect waves-light'
          type='submit'
          name='action'
          style={{ margin: "4rem 0", width: "10rem" }}
          onClick={this.btnClicked}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddNewPet;
