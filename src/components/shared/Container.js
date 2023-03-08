import React, { Children } from "react";

export default function Container({ children }) {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          {Children.map(children, (child) => (
            <>{child}</>
          ))}
        </div>
      </div>
    </div>
  );
}
