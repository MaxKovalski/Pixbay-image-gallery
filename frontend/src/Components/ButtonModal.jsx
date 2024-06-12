import React from "react";
import "./ButtonModal.css";

function ButtonModal({ isOpen, onClose, onSelectCategory }) {
  // Return null if modal is not open
  if (!isOpen) return null;

  // List of categories
  const categories = [
    "Animals",
    "Architecture",
    "Backgrounds",
    "Business",
    "Education",
    "Fashion",
    "Feelings",
    "Food",
    "Health",
    "Industry",
    "Music",
    "Nature",
    "People",
    "Places",
    "Religion",
    "Science",
    "Sports",
    "Technology",
    "Transportation",
    "Travel",
  ];

  // Handle category selection
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    onClose();
  };

  // Render the modal
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Select Category</h2>
        <ul className="category-list">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category.toLowerCase())}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ButtonModal;
