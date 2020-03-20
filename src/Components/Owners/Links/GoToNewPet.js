import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddVisit extends Component {
  handleClick = id => {
    this.props.deleteItem(id);
  };

  handleClicks = id => {
    this.props.deleteIteers(id);
  };

  handleId = Id => {
    this.props.AddVisiteId(Id);
    console.log(Id);
  };

  render() {
    const { userInfo, AddNewPet, news } = this.props;

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
            style={{ background: "#333", marginBottom: "3rem" }}
          >
            <i className='fas fa-arrow-left' /> Go Back
          </button>
        </Link>
        <h5>Pets</h5>
        {AddNewPet === "" ? (
          <table>
            <thead style={{ background: "#4E5964", color: "#f4f4f4" }}>
              <tr>
                <th className='center'>Pet Name</th>
                <th className='center'>BirthDay</th>
                <th className='center'>Type</th>
                <th className='center'>Visit Date</th>
                <th className='center'>Description</th>
                <th className='center'>Add Visit</th>
                <th className='center'>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='center'>{userInfo.nameP}</td>
                <td className='center'>{userInfo.birthD}</td>
                <td className='center'>{userInfo.typeP}</td>
                {news === "" ? (
                  <td className='center'>{userInfo.dateV}</td>
                ) : (
                  news.map(curn => (
                    <div>
                      <td className='center'>{userInfo.dateV}</td>
                      <tr>
                        <td className='center'>{curn.date}</td>
                      </tr>
                    </div>
                  ))
                )}
                <td className='center'>{userInfo.des}</td>
                <td className='center'>
                  {" "}
                  <Link to='/AddVsiters'>
                    {" "}
                    <button
                      className='btn waves-effect waves-light'
                      type='submit'
                      name='action'
                      style={{
                        background: "#53c5ff"
                      }}
                    >
                      Add Visit <i class='fas fa-plus' />{" "}
                    </button>{" "}
                  </Link>
                </td>
                <td className='center'>
                  <i style={{ fontSize: "1.3rem" }} className='fas fa-user' />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>
            <table>
              <thead style={{ background: "#4E5964", color: "#f4f4f4" }}>
                <tr>
                  <th className='center'>Pet Name</th>
                  <th className='center'>BirthDay</th>
                  <th className='center'>Type</th>
                  <th className='center'>Visit Date</th>
                  <th className='center'>Description</th>
                  <th className='center'>Add Visit</th>
                  <th className='center'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {AddNewPet.map(cur =>
                  cur.id === userInfo.id ? (
                    <tr key={cur.eId}>
                      <td className='center'>{cur.name}</td>
                      <td className='center'>{cur.birth}</td>
                      <td className='center'>{cur.select}</td>
                      <td className='center'>{cur.visitP}</td>
                      <td className='center'>{cur.dec}</td>
                      <td className='center'>
                        {" "}
                        <Link to='/AddVsiters'>
                          {" "}
                          <button
                            className='btn waves-effect waves-light'
                            type='submit'
                            name='action'
                            style={{
                              background: "#53c5ff"
                            }}
                            onClick={() => this.handleId(cur.eId)}
                          >
                            Add Visit <i class='fas fa-plus' />{" "}
                          </button>{" "}
                        </Link>
                      </td>
                      <td className='center'>
                        <i
                          className='fas fa-trash-alt trash'
                          onClick={() => this.handleClick(cur.eId)}
                        />
                      </td>
                      {news === "" ? (
                        <td />
                      ) : (
                        news.map(cur => (
                          <tr>
                            {" "}
                            <td />
                            <td />
                            <td />
                            <td className='center'>{cur.date}</td>{" "}
                            <td className='center'>{cur.dec}</td> <td />
                            <td />
                            <td />
                          </tr>
                        ))
                      )}
                    </tr>
                  ) : (
                    console.log(2)
                  )
                )}
                <tr>
                  <td className='center'>{userInfo.nameP}</td>
                  <td className='center'>{userInfo.birthD}</td>
                  <td className='center'>{userInfo.typeP}</td>
                  <td className='center'>{userInfo.dateV}</td>
                  <td className='center'>{userInfo.des}</td>
                  <td className='center'>
                    {" "}
                    <Link to='/AddVsiters'>
                      {" "}
                      <button
                        className='btn waves-effect waves-light'
                        type='submit'
                        name='action'
                        style={{
                          background: "#53c5ff"
                        }}
                      >
                        {" "}
                        Add Visit <i class='fas fa-plus' />{" "}
                      </button>{" "}
                    </Link>
                  </td>
                  <td className='center'>
                    <i style={{ fontSize: "1.3rem" }} className='fas fa-user' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AddVisit;
