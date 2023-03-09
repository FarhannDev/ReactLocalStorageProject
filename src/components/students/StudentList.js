import React from "react";

export default function StudentList({ items, onDelete }) {
  return (
    <table
      className="table table-striped table-hover"
      style={{ width: "100%" }}
    >
      <thead className="thead-dark">
        <tr>
          {/* <th className="col-* text-white"></th> */}
          <th className="col-* text-white">Nama</th>
          <th className="col-* text-white">Email</th>
          <th className="col-* text-white">Prodi</th>
          <th className="col-* text-white"></th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => {
          return (
            <tr key={item.id}>
              <td className="col-* align-middle text-white">{item.name}</td>
              <td className="col-* align-middle text-white">{item.email}</td>
              <td className="col-* align-middle text-white">{item.prodi}</td>
              <td className="col-* align-middle text-white">
                <button
                  onClick={() => onDelete(item.id)}
                  className="btn btn-danger btn-sm rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
