import React, { Component } from "react";
import Footer from "../Layout/Footer";

class Forms extends Component {
  state = {
    name: "",
    adress: "",
    states: "",
    city: "",
    phone: "",
    nameP: "",
    birthD: "",
    typeP: "",
    dateV: "",
    des: "",
    id: ""
  };

  name = e => this.setState({ name: e.target.value });
  adress = e => this.setState({ adress: e.target.value });
  states = e => this.setState({ states: e.target.value });
  city = e => this.setState({ city: e.target.value });
  phone = e => this.setState({ phone: e.target.value });
  nameP = e => this.setState({ nameP: e.target.value });
  birthD = e => this.setState({ birthD: e.target.value });
  typeP = e => this.setState({ typeP: e.target.value });
  dateV = e => this.setState({ dateV: e.target.value });
  des = e => this.setState({ des: e.target.value });

  click = e => {
    if (
      this.state.name === "" ||
      this.state.adress === "" ||
      this.state.state === "" ||
      this.state.city === "" ||
      this.state.phone === "" ||
      this.state.nameP === "" ||
      this.state.birthD === "" ||
      this.state.typeP === "" ||
      this.state.dateV === "" ||
      this.state.des === ""
    ) {
      console.log("error");
    } else {
      this.props.userData(this.state);
      this.setState({ id: Math.random().toString(), alert: false });

      this.setState({
        name: "",
        adress: "",
        states: "",
        city: "",
        phone: "",
        nameP: "",
        birthD: "",
        typeP: "",
        dateV: "",
        des: "",
        id: ""
      });
    }
  };

  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Please Enter Info Below</h4>
        <div className='row container' style={{ marginTop: "1rem" }}>
          {/* Name */}
          <div className='input-field col s6'>
            <input value={this.state.name} type='text' onChange={this.name} />
            <label className='active' htmlFor='first_name2'>
              Name (Saad Asif)
            </label>
          </div>

          {/*Address*/}
          <div className='input-field col s6'>
            <input
              value={this.state.adress}
              type='text'
              onChange={this.adress}
            />
            <label className='active' htmlFor='first_name2'>
              Address ( 4052 Antiem St. 92111)
            </label>
          </div>

          {/* state*/}
          <div className='input-field col s6'>
            <input
              value={this.state.states}
              type='text'
              onChange={this.states}
            />
            <label className='active' htmlFor='first_name2'>
              State ( CA )
            </label>
          </div>

          {/* city */}
          <div className='input-field col s6'>
            <input value={this.state.city} type='text' onChange={this.city} />
            <label className='active' htmlFor='first_name2'>
              City ( San Deigo)
            </label>
          </div>

          {/* telephone*/}
          <div className='input-field col s6'>
            <input
              value={this.state.phone}
              type='number'
              onChange={this.phone}
            />
            <label className='active' htmlFor='first_name2'>
              Telephone
            </label>
          </div>

          {/* Pet Name */}
          <div className='input-field col s6'>
            <input value={this.state.nameP} type='text' onChange={this.nameP} />
            <label className='active' htmlFor='first_name2'>
              Pet Name
            </label>
          </div>

          {/* Date Visited*/}
          <div className='input-field col s6'>
            <input value={this.state.dateV} type='date' onChange={this.dateV} />
            <label className='active' htmlFor='first_name2'>
              Date Visited
            </label>
          </div>

          {/* Birth Day*/}
          <div className='input-field col s6'>
            <input
              value={this.state.birthD}
              type='date'
              onChange={this.birthD}
            />
            <label className='active' htmlFor='first_name2'>
              Birth Day
            </label>
          </div>

          {/* pet type*/}
          <div className='input-field col s12'>
            <input value={this.state.typeP} type='text' onChange={this.typeP} />
            <label className='active' htmlFor='first_name2'>
              Pet Type
            </label>
          </div>

          {/* Description */}
          <div className='input-field col s12'>
            <input value={this.state.des} type='text' onChange={this.des} />
            <label className='active' htmlFor='first_name2'>
              Description
            </label>
          </div>

          {/* button */}
          <a
            className='waves-effect waves-light btn-small btn-saad'
            style={{
              width: "100%",
              height: "2.3rem",
              marginTop: "3rem",
              background: "#4E5964",
              marginBottom: "3rem"
            }}
            onClick={this.click}
          >
            <i className='material-icons right' /> Submit
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Forms;
