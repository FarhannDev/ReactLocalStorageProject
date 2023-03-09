import React from "react";

import StudentList from "./StudentList";
import StudentsEmpty from "./StudentEmpty";

export default function Students({ items, onDelete }) {
  return (
    <>
      <div className="table-responsive">
        {items.length ? (
          <StudentList items={items} onDelete={onDelete} />
        ) : (
          <StudentsEmpty />
        )}
      </div>
    </>
  );
}
