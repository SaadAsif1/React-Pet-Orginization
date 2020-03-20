import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddVisit extends Component {
  state = {
    date: "",
    dec: "",
    eId: ""
  };

  date = e => this.setState({ date: e.target.value });
  dec = e =>
    this.setState({ dec: e.target.value, eId: this.props.AddVisiteId });

  hamndleClick = () => {
    this.props.newVisit(this.state);
  };

  // rendering /////////
  render() {
    const { userInfo, AddNewPet, AddVisiteId } = this.props;

    // console.log(AddVisiteId);

    return (
      <div
        className='row'
        style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}
      >
        <Link to='/AddVisit'>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
            style={{ background: "#333", marginBottom: "3rem" }}
          >
            <i className='fas fa-arrow-left' /> Go Back
          </button>
        </Link>

        {AddVisiteId === "" ? (
          <div>
            <h5>New Pet Visit</h5>
            <table>
              <thead style={{ background: "#A8A8A8", color: "#f4f4f4" }}>
                <tr>
                  <th className='center'>Pet Name</th>
                  <th className='center'>Birth Date</th>
                  <th className='center'>Type</th>
                  <th className='center'>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='center'>{userInfo.nameP}</td>
                  <td className='center'>{userInfo.birthD}</td>
                  <td className='center'>{userInfo.typeP}</td>
                  <td className='center'>{userInfo.name}</td>
                </tr>
              </tbody>
            </table>

            {/* Input One (Date)*/}
            <div
              className='input-field col s12'
              style={{ margin: "4rem 0", marginBottom: "3rem" }}
            >
              <input
                id='first_name2'
                type='date'
                onChange={this.date}
                value={this.state.date}
                className='validate'
              />
              <label className='active' htmlFor='first_name2'>
                Date
              </label>
            </div>

            {/* Input Two (Description)*/}
            <div
              className='input-field col s12'
              style={{
                marginBottom: "3rem",
                margin: "auto"
              }}
            >
              <input
                id='first_name2'
                onChange={this.dec}
                value={this.state.dec}
                type='text'
                className='validate'
              />
              <label className='active' htmlFor='first_name2'>
                Description
              </label>
            </div>

            {/* Button */}
            <button onClick={this.hamndleClick}>submit</button>

            {/* Table */}
            <ul
              className='collection with-header col s12'
              style={{ margin: "4rem 0" }}
            >
              <li className='collection-header'>
                <h5>Previous Visits</h5>
              </li>
              <li className='collection-item'>
                <div>
                  <span
                    style={{
                      color: "black",
                      fontWeight: "bolder",
                      fontStyle: "italic"
                    }}
                  >
                    Date
                  </span>
                  <a className='secondary-content'>
                    <i
                      style={{ color: "black", fontWeight: "bolder" }}
                      className='material-icons'
                    >
                      Description
                    </i>
                  </a>
                </div>
              </li>
              <li className='collection-item'>
                <div>
                  {userInfo.dateV}
                  <a className='secondary-content'>
                    <i className='material-icons'>{userInfo.des}</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          AddNewPet.map(cur => {
            if (cur.eId === AddVisiteId) {
              return (
                <div>
                  <h5>New Pet Visit</h5>
                  <table>
                    <thead style={{ background: "#A8A8A8", color: "#f4f4f4" }}>
                      <tr>
                        <th className='center'>Pet Name</th>
                        <th className='center'>Birth Date</th>
                        <th className='center'>Type</th>
                        <th className='center'>Owner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='center'>{cur.name}</td>
                        <td className='center'>{cur.birth}</td>
                        <td className='center'>{cur.select}</td>
                        <td className='center'>{userInfo.name}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Input One (Date)*/}
                  <div
                    className='input-field col s12'
                    style={{ margin: "4rem 0", marginBottom: "3rem" }}
                  >
                    <input
                      id='first_name2'
                      onChange={this.date}
                      value={this.state.date}
                      type='date'
                      className='validate'
                    />
                    <label className='active' htmlFor='first_name2'>
                      Date
                    </label>
                  </div>

                  {/* Input Two (Description)*/}
                  <div
                    className='input-field col s12'
                    style={{
                      marginBottom: "3rem",
                      margin: "auto"
                    }}
                  >
                    <input
                      id='first_name2'
                      type='text'
                      onChange={this.dec}
                      value={this.state.dec}
                      className='validate'
                    />
                    <label className='active' htmlFor='first_name2'>
                      Description
                    </label>
                  </div>

                  {/* Button */}
                  <button onClick={this.hamndleClick}>submit</button>

                  {/* Table */}
                  <ul
                    className='collection with-header col s12'
                    style={{ margin: "4rem 0" }}
                  >
                    <li className='collection-header'>
                      <h5>Previous Visits</h5>
                    </li>
                    <li className='collection-item'>
                      <div>
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontStyle: "italic"
                          }}
                        >
                          Date
                        </span>
                        <a className='secondary-content'>
                          <i
                            style={{ color: "black", fontWeight: "bolder" }}
                            className='material-icons'
                          >
                            Description
                          </i>
                        </a>
                      </div>
                    </li>
                    <li className='collection-item'>
                      <div>
                        {cur.visitP}
                        <a className='secondary-content'>
                          <i className='material-icons'>{cur.dec}</i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            }
          })
        )}
      </div>
    );
  }
}

export default AddVisit;

// birth: "2019-08-09"
// dec: "asdasd"
// eId: 0.9371372315018902
// id: "2131231"
// name: "dasd"
// select: "snake"
// visitP: "2019-08-09"

// adress: "4052, Antiem St."
// birthD: "2017-08-09"
// city: "San Deigo"
// dateV: "2019-01-12"
// des: "Checkup"
// id: "2131231"
// name: "Ahmed Asif"
// nameP: "Charle"
// phone: "8582498784"
// states: "CA"
// typeP: "Cat"
