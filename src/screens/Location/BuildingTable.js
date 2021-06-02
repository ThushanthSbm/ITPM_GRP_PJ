import React from "react";
import "./BuildingTable.css";
const BuildingTable = ({
  userData,
  Handlebox,
  handleDelete,
  gotoUpdatePage,
}) => {
  return (
    <table className="table table-dark table-hover locationContainer__table">
      <thead>
        <tr>
          <th>Building</th>
          <th>Center</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((data) => (
          <tr key={data.id}>
            <td>
             
        ))}
      </tbody>
    </table>
  );
};

export default BuildingTable;
