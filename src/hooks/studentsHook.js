// Custom data mahasiswa Hooks
export const studentState = {
  name: "",
  email: "",
  prodi: "",
  graduate: false,
};

// Menambahkan data ke localstorage API
export const fetchStudents = () =>
  localStorage.getItem("students")
    ? JSON.parse(localStorage.getItem("students"))
    : [];

export const addNewStudents = (student) => {
  const students = fetchStudents();
  localStorage.setItem("students", JSON.stringify(students.concat(student)));
};

export const deleteStudents = (studentID) => {
  console.log(studentID);
  const students = fetchStudents();
  const filteredStudents = students.filter(
    (student, index) => student.id !== studentID
  );
  localStorage.setItem("students", JSON.stringify(filteredStudents));
};

export const updateStudents = (studentID, value) => {
  const students = fetchStudents();
  const filteredStudents = students.map((student, index) =>
    student.id === studentID ? value : student
  );
  localStorage.setItem("students", JSON.stringify(filteredStudents));
};
