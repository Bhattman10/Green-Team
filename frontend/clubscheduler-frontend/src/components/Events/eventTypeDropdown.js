import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid #0021A5; /* Blue border */
  background-color: #FFFFFF; /* White background */
  color: #0021A5; /* Orange color for text */
  margin-bottom: 20px;
  font-size: 0.9rem; /* Adjust the font size here */
`;

const EventTypeDropdown = ({ tags, onTagSelect }) => {
  return (
    <Dropdown onChange={(e) => onTagSelect(e.target.value)}>
      <option value="">Filter by Category</option>
      {tags.map((tag, index) => (
        <option key={index} value={tag.tagName}>
          {tag.tagName}
        </option>
      ))}
    </Dropdown>
  );
};

export default EventTypeDropdown;
