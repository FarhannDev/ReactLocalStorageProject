import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  addNewStudents,
  deleteStudents,
  fetchStudents,
  studentState,
} from "../../hooks/studentsHook";

export const StudentsAddForm = () => {
  const [state, setState] = useState(studentState);
  const { name, email, prodi } = state;
  const onNameChangeEventHandler = (event) => {
    setState({ ...state, name: event.target.value });
  };
  const onEmailChangeEventHandler = (event) => {
    setState({ ...state, email: event.target.value });
  };
  const onProdiChangeEventHandler = (event) => {
    setState({ ...state, prodi: event.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const students = fetchStudents();
    const findStudentEmail = students.find(
      (student) => student.email === email
    );

    if (findStudentEmail)
      return Swal.fire({
        icon: "error",
        title: "Upppss...",
        text: "Alamat email sudah terdaftar!.",
      });

    if (state.name.length || state.email.length || state.prodi.length) {
      const studentId =
        Date.now().toString(36) +
        Math.floor(
          Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
        ).toString(36);

      const currentDate = new Date().toISOString();
      const createdAt = currentDate;
      const updatedAt = createdAt;

      addNewStudents({
        ...state,
        id: studentId,
        createdAt: createdAt,
        updatedAt: updatedAt,
      });
    }
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Berhasil menambahkan data mahasiswa.",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <form onSubmit={onSubmitHandler} className="g-3 row">
      <div className="mb-3 col-sm-6">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nama mahasiswa:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Nama mahasiswa"
          value={name}
          onChange={onNameChangeEventHandler}
        />
      </div>
      <div className="mb-3 col-sm-6">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Alamat email:
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Email mahasiswa"
          value={email}
          onChange={onEmailChangeEventHandler}
        />
      </div>
      <div className="mb-3 col-sm-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Program studi:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Program studi contoh: Ilmu Komputer"
          value={prodi}
          onChange={onProdiChangeEventHandler}
        />
      </div>
      <div className="mb-3 col-sm-12">
        <button
          disabled={!state.name || !state.email || !state.prodi}
          type="submit"
          className="btn btn-dark btn-lg d-block w-100"
        >
          Simpan Data
        </button>
      </div>
    </form>
  );
};

export const StudentsItem = ({ items }) => {
  const onDeleteHandler = (studentId) => {
    Swal.fire({
      title: "Hapus data mahasiswa",
      text: "Apakah kamu yakin menghapus data mahasiswa ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStudents(studentId);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Data mahasiswa dihapus.",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };
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
                  onClick={() => onDeleteHandler(item.id)}
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
};

export const StudentsEmpty = () => {
  return (
    <div className="d-flex justify-content-center">
      <p className="text-white text-center pt-3">
        Belum menambahkan data mahasiswa.
      </p>
    </div>
  );
};
export const SearchStudent = ({ title, search, setSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={title}
        aria-label={title}
        aria-describedby="button-addon2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export const Students = ({ items }) => {
  return (
    <>
      <div className="table-responsive">
        {items.length ? <StudentsItem items={items} /> : <StudentsEmpty />}
      </div>
    </>
  );
};
