import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditOwner extends Component {
  state = {
    name: "",
    adress: "",
    city: "",
    phone: "",
    states: "",
    nameU: this.props.userInfo.id
  };

  name = e => this.setState({ name: e.target.value });
  adress = e => this.setState({ adress: e.target.value });
  city = e => this.setState({ city: e.target.value });
  phone = e => this.setState({ phone: e.target.value });
  states = e => this.setState({ states: e.target.value });

  cliked = e => {
    this.props.newName(this.state);
    this.setState({
      name: "",
      adress: "",
      city: "",
      phone: "",
      states: ""
    });
    e.preventDefault();
  };

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <div
          className='row'
          style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}
        >
          <Link to='/oinfo'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
              style={{ background: "#333", marginBottom: "3rem" }}
            >
              <i className='fas fa-arrow-left' /> Go Back
            </button>
          </Link>
          <h5 style={{ marginBottom: "1rem" }}>Edit Owner</h5>
          <div className='input-field col s6'>
            <input
              style={{ fontWeight: "bolder" }}
              onChange={this.name}
              value={this.state.name}
              placeholder={userInfo.name}
              type='text'
              className='validate'
            />
            <label className='active' for='first_name2'>
              Name
            </label>
          </div>

          <div className='input-field col s6'>
            <input
              style={{ fontWeight: "bolder" }}
              onChange={this.adress}
              value={this.state.adress}
              placeholder={userInfo.adress}
              type='text'
              className='validate'
            />
            <label className='active' for='first_name2'>
              Address
            </label>
          </div>

          <div className='input-field col s6'>
            <input
              style={{ fontWeight: "bolder" }}
              onChange={this.city}
              value={this.state.city}
              placeholder={userInfo.city}
              type='text'
              className='validate'
            />
            <label className='active' for='first_name2'>
              City
            </label>
          </div>

          <div className='input-field col s6'>
            <input
              style={{ fontWeight: "bolder" }}
              onChange={this.states}
              value={this.state.states}
              placeholder={userInfo.states}
              type='text'
              className='validate'
            />
            <label className='active' for='first_name2'>
              State
            </label>
          </div>

          <div className='input-field col s12'>
            <input
              style={{ fontWeight: "bolder" }}
              onChange={this.phone}
              value={this.state.phone}
              placeholder={userInfo.phone}
              type='number'
              className='validate'
            />
            <label className='active' for='first_name2'>
              Telephone
            </label>
          </div>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
            style={{ margin: "4rem 0rem", width: "15rem" }}
            onClick={this.cliked}
          >
            Update Owner
          </button>
        </div>
      </div>
    );
  }
}

export default EditOwner;
