import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Container from "./shared/Container";
import { Box, BoxTitle } from "./shared/Box";
import { Students, StudentsAddForm, SearchStudent } from "./ui/Students";
import { fetchStudents } from "../hooks/studentsHook";
import "../styles/App.css";

export default function App() {
  const [isStudents, setIsStudents] = useState(true);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const student = fetchStudents();
    if (student !== null) setStudents(student);
  }, [isStudents]);

  return (
    <Layout>
      <Container>
        <Box>
          <div className="px-md-3 px-0">
            <div className="mb-3 border-bottom ">
              <BoxTitle title="Tambah Data Mahasiswa" />
            </div>
            <StudentsAddForm />
          </div>
        </Box>
        <Box>
          <div className="px-md-3 px-0 py-3 mb-3">
            <div className="mb-3 border-bottom">
              <BoxTitle title="Daftar Mahasiswa" />
              <SearchStudent
                title="Cari data mahasiswa...."
                search={search}
                setSearch={setSearch}
              />
            </div>
            <Students
              items={students.filter((student) =>
                student.name.toLowerCase().includes(search.toLowerCase())
              )}
            />
          </div>
        </Box>
      </Container>
    </Layout>
  );
}
