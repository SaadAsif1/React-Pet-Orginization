import React, { Component } from "react";
import { Link } from "react-router-dom";

export class OwnersList extends Component {
  state = {
    id: "",
    search: ""
  };

  handleClick = id => {
    this.props.deleteItems(id);
  };

  // filter
  updateS = e => {
    this.setState({ search: e.target.value });
  };

  //userClick
  userClick = e => {
    {
      this.props.use(e);
    }
  };

  render() {
    const { users, newName } = this.props;
    let filtedOwners = users.filter(users => {
      return (
        users.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    if (users.length === 0) {
      return (
        <div style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}>
          {/* filter */}
          <div className='input-field'>
            <input
              type='text'
              onChange={this.updateS}
              value={this.state.search}
            />
            <label htmlFor='name' style={{ fontSize: "1.3rem" }}>
              Filter Owners Names
            </label>
          </div>

          <h5>Owners</h5>
          <table>
            <thead style={{ background: "#4E5964", color: "#f4f4f4" }}>
              <tr>
                <th className='center'>Owners Name</th>
                <th className='center'>Address</th>
                <th className='center'>City</th>
                <th className='center'>Telephone</th>
                <th className='center'>Pets Name</th>
                <th className='center'>Delete</th>
              </tr>
            </thead>
            <div className='collection' style={{ width: "405%" }}>
              <p
                className='collection-item'
                style={{ textAlign: "center", background: "#f4f4f4" }}
              >
                No Users
              </p>
            </div>
          </table>
        </div>
      );
    } else {
      return (
        <div style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}>
          <div className='input-field col s6'>
            <input
              type='text'
              onChange={this.updateS}
              value={this.state.search}
            />
            <label htmlFor='name' style={{ fontSize: "1.3rem" }}>
              Filter Owners Names
            </label>
          </div>
          <h5>Owners</h5>
          <table>
            <thead style={{ background: "#4E5964", color: "#f4f4f4" }}>
              <tr>
                <th className='center'>Owners Name</th>
                <th className='center'>Address</th>
                <th className='center'>City</th>
                <th className='center'>Telephone</th>
                <th className='center'>Pets Name</th>
                <th className='center'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filtedOwners.map(users => (
                <tr key={users.id}>
                  <td
                    onClick={() => this.userClick(users)}
                    value={users.name}
                    className='center'
                  >
                    <Link className='under' to='/oinfo'>
                      {newName === ""
                        ? users.name
                        : newName.nameU === users.id
                        ? newName.name
                        : users.name}
                    </Link>
                  </td>{" "}
                  <td className='center'>
                    {newName === ""
                      ? users.adress
                      : newName.nameU === users.id
                      ? newName.adress
                      : users.adress}
                  </td>
                  <td className='center'>
                    {newName === ""
                      ? users.city
                      : newName.nameU === users.id
                      ? newName.city
                      : users.city}
                  </td>
                  <td className='center'>
                    {newName === ""
                      ? users.phone
                      : newName.nameU === users.id
                      ? newName.phone
                      : users.phone}
                  </td>
                  <td className='center'>{users.nameP}</td>
                  <td className='center'>
                    <i
                      className='fas fa-trash-alt trash'
                      onClick={() => this.handleClick(users.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default OwnersList;
