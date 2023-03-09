import React, { useRef } from "react";

export default function StudentAdd({ state, setState, onSubmit }) {
  const inputRef = useRef();
  const onNameChangeEventHandler = (e) =>
    setState({ ...state, name: e.target.value });
  const onEmailChangeEventHandler = (e) =>
    setState({ ...state, email: e.target.value });
  const onProdiChangeEventHandler = (e) =>
    setState({ ...state, prodi: e.target.value });

  const { name, email, prodi } = state;
  const onButtonClickedHandler = () => inputRef.current.focus();
  const onButtonDisabledHandler = !state.name || !state.email || !state.prodi;

  return (
    <form onSubmit={onSubmit} className="g-3 row">
      <div className="mb-3 col-sm-6">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nama mahasiswa:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Nama mahasiswa"
          ref={inputRef}
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
          ref={inputRef}
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
          ref={inputRef}
          value={prodi}
          onChange={onProdiChangeEventHandler}
        />
      </div>
      <div className="mb-3 col-sm-12">
        <button
          disabled={onButtonDisabledHandler}
          onClick={onButtonClickedHandler}
          type="submit"
          className="btn btn-dark btn-lg d-block w-100"
        >
          Simpan Data
        </button>
      </div>
    </form>
  );
}
