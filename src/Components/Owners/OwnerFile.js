import React, { Component } from "react";
import { Link } from "react-router-dom";

class OwnerFile extends Component {
  render() {
    const { userInfo, AddNewPet, newName, newPet, eId, newDes } = this.props;

    return (
      <div style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}>
        <Link to='/owners'>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
            style={{ background: "#333", marginBottom: "2rem" }}
          >
            <i class='fas fa-arrow-left' /> Go Back
          </button>
        </Link>

        <h5>Owner Infomation</h5>
        <div className='collection'>
          <p className='collection-item'>
            <span className='badge'>
              {newName === ""
                ? userInfo.name
                : newName.nameU === userInfo.id
                ? newName.name
                : userInfo.name}
            </span>{" "}
            Name
          </p>
          <p className='collection-item '>
            <span className='badge'>
              {newName === ""
                ? userInfo.adress
                : newName.nameU === userInfo.id
                ? newName.adress
                : userInfo.adress}{" "}
              {newName === ""
                ? userInfo.city
                : newName.nameU === userInfo.id
                ? newName.city
                : userInfo.city}{" "}
              {newName === ""
                ? userInfo.states
                : newName.nameU === userInfo.id
                ? newName.states
                : userInfo.states}
            </span>
            Address
          </p>
          <p className='collection-item'>
            <span className='badge'>
              {newName === ""
                ? userInfo.city
                : newName.nameU === userInfo.id
                ? newName.city
                : userInfo.city}
            </span>
            City
          </p>
          <p className='collection-item'>
            <span className='badge'>
              {newName === ""
                ? userInfo.phone
                : newName.nameU === userInfo.id
                ? newName.phone
                : userInfo.phone}
            </span>
            Telephone
          </p>
        </div>
        <div className='top'>
          <Link to='/EditOwner' className='waves-effect waves-light btn'>
            Edit Owners
          </Link>
          <Link to='/AddNewPet' className='waves-effect waves-light btn pad'>
            Add New pet
          </Link>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h5>Pet and Visits</h5>
            </div>
            <div>
              <Link
                to='/AddVisit'
                className='waves-effect waves-dark btn'
                style={{ background: "#46aec0" }}
              >
                More
              </Link>
            </div>
          </div>

          <ul className='collection'>
            <li className='collection-item avatar'>
              <i className='fas fa-user circle' />
              <p style={{ marginLeft: "1.5rem" }}>
                <span className='bold'>Pets Name:</span> {userInfo.nameP} <br />
                <span className='bold'>Birth Date: </span>
                {userInfo.birthD} <br />
                <span className='bold'>Type:</span> {userInfo.typeP}
              </p>
              <p className='secondary-content' style={{ display: "flex" }}>
                <div style={{ marginRight: "3rem" }}>
                  <span className='bold'>Visit Date :</span> <br />
                  {userInfo.dateV} <br />
                </div>
                <div>
                  <span className='bold'>Description: </span>
                  <br />
                  {userInfo.des} <br />
                </div>
              </p>
            </li>

            {AddNewPet === ""
              ? console.log("sorry")
              : AddNewPet.map(
                  cur =>
                    cur.id === userInfo.id && (
                      <li className='collection-item avatar' key={cur.eId}>
                        <i className='fas fa-user circle' />
                        <p style={{ marginLeft: "1.5rem" }}>
                          <span className='bold'>Pets Name:</span> {cur.name}
                          <br />
                          <span className='bold'>Birth Date: </span>
                          {cur.birth}
                          <br />
                          <span className='bold'>Type:</span> {cur.select}
                        </p>
                        <p
                          className='secondary-content'
                          style={{ display: "flex" }}
                        >
                          <div style={{ marginRight: "3rem" }}>
                            <span className='bold'>Visit Date :</span> <br />
                            {cur.visitP} <br />
                          </div>
                          <div>
                            <span className='bold'>Description: </span>
                            <br />
                            {cur.dec} <br />
                          </div>
                        </p>
                      </li>
                    )
                )}
          </ul>
        </div>
      </div>
    );
  }
}

export default OwnerFile;
