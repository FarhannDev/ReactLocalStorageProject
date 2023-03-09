import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import apiRequest from "../config/ApiRequest";

// Include components
import Container from "../components/shared/Container";
import Layout from "../components/layout";
import Loading from "../components/shared/Loading";
import Box from "../components/box/Box";
import BoxTitle from "../components/box/BoxTitle";
import Students from "../components/students/Student";
import StudentAdd from "../components/students/StudentAdd";
import StudentSearch from "../components/students/StudentSearch";

export default function StudentContainer() {
  const API_URL = `http://localhost:5000/students`;
  const [students, setStudents] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    prodi: "",
    graduated: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not received expected data.");
        const responseJson = await response.json();
        setStudents(responseJson);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  }, [API_URL]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const uniqueId =
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
      ).toString(36);

    const newStudent = {
      ...state,
      id: uniqueId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setStudents([...students, newStudent]);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newStudent),
    };

    const result = await apiRequest(API_URL, options);
    if (result) setFetchError(result);
    if (!state) return;

    setState({
      name: "",
      email: "",
      prodi: "",
    });
  };

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
        const student = students.filter((student) => student.id !== studentId);
        setStudents(student);

        const deleteOptions = { method: "DELETE" };
        const reqUrl = `${API_URL}/${studentId}`;
        apiRequest(reqUrl, deleteOptions);

        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Data mahasiswa dihapus.",
        });
      }
    });
  };

  return (
    <>
      <Box>
        <BoxTitle title="Tambah data mahasiswa" />
        <StudentAdd
          state={state}
          setState={setState}
          onSubmit={onSubmitHandler}
        />
      </Box>
      <Box>
        <div className="px-md-3 px-0 py-3 mb-3">
          <div className="mb-3 border-bottom">
            <BoxTitle title="Daftar Mahasiswa" />
            <StudentSearch
              title="Cari data mahasiswa..."
              search={search}
              setSearch={setSearch}
            />
          </div>
          {fetchError && <Loading />}
          {isLoading && <Loading />}
          {!fetchError && !isLoading && (
            <Students
              onDelete={onDeleteHandler}
              items={students.filter((student) =>
                student.name.toLowerCase().includes(search.toLowerCase())
              )}
            />
          )}
        </div>
      </Box>
    </>
  );
}
