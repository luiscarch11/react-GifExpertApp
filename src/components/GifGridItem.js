import React from "react";

export const GifGridItem = ({ title, id, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img key={id} src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
