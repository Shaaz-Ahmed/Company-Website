import React from "react";
import { Link } from "react-router-dom";

const EnewsItem = ({ image, title, date, link }) => {
  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        maxWidth: '300px',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: '10px',
      }}
    >
      {/* Image container with 100% width */}
      <img
        src={image}
        alt={title}
        style={{
          width: '100%', // Make image fill the width of the card
          height: 'auto', // Maintain aspect ratio
          objectFit: 'cover', // Ensure the image covers the area without distortion
        }}
      />
      {/* Text container */}
      <div
        style={{
          textAlign: 'left', // Align text to the left
          marginTop: '10px',
        }}
      >
        <Link
          to={link}
          style={{
            textDecoration: 'underline',
            color: 'black',
            transition: 'color 0.3s ease',
            display: 'block', // Ensure the title is on a new line
            marginBottom: '5px', // Space between title and date
          }}
        >
          <p style={{ margin: '0', fontSize: '14px' }}>{title}</p>
        </Link>
        <p style={{ fontSize: '12px', margin: '0' }}>{date}</p>
      </div>
    </div>
  );
};

export default EnewsItem;
