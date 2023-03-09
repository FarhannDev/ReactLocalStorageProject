import React from "react";
import Layout from "./components/layout";
import Container from "./components/shared/Container";
import StudentContainer from "./containers/StudentContainer";

export default function App() {
  return (
    <Layout>
      <Container>
        <StudentContainer />
      </Container>
    </Layout>
  );
}
