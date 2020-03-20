import React, { Component } from "react";

class Veterinarians extends Component {
  render() {
    return (
      <div
        className='row'
        style={{ width: "65rem", margin: "auto", marginTop: "3rem" }}
      >
        <h5>Veterinarians</h5>
        <table>
          <thead style={{ background: "#4E5964", color: "#f4f4f4" }}>
            <tr>
              <th>Name</th>
              <th>Specialties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Casey Alambar</td>
              <td>Diagnostic radiology</td>
            </tr>
            <tr>
              <td> Enzo Hannagan</td>
              <td>Anesthesiology</td>
            </tr>
            <tr>
              <td> Gordon Sud</td>
              <td>none</td>
            </tr>
            <tr>
              <td> Landen Witherite</td>
              <td>radiology</td>
            </tr>
            <tr>
              <td>Rafael Ortega </td>
              <td> surgery</td>
            </tr>
            <tr>
              <td>Henry Stevens </td>
              <td>dentistry surgery</td>
            </tr>
            <tr>
              <td>Linda Douglas </td>
              <td>none</td>
            </tr>
            <tr>
              <td>Dr. Mckenzie Zukoski</td>
              <td>radiology</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Veterinarians;
