import React from 'react';

import './ModalItem.css';

const ModalItem = ({
  addItem,
  clearModalField,
  modalShow,
  currentId,
  currentTitle,
  currentDescription,
  currentPriority,
  handleSelect,
}) => {
  return (
    <section className={modalShow ? 'visible' : 'invisible'}>
      <div className="modal__fade" onClick={clearModalField}></div>
      <div className="modal__form">
        <div className="modal__part">
          <label htmlFor="title">Title</label>
          <input
            value={currentTitle}
            onChange={handleSelect}
            type="text"
            name="currentTitle"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="modal__part">
          <label htmlFor="description">Description</label>
          <textarea
            value={currentDescription}
            onChange={handleSelect}
            name="currentDescription"
            id="description"
            cols="30"
            rows="2"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="modal__part">
          <label htmlFor="priority">Priority</label>
          <select value={currentPriority} onChange={handleSelect} name="currentPriority" id="priority">
            <option value="high">high</option>
            <option value="normal">normal</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="modal__buttons">
          <button className="btn btn-warning" onClick={clearModalField}>
            Cancel
          </button>
          <button
            className="btn btn-success"
            onClick={() => addItem(currentTitle, currentDescription, currentPriority, currentId)}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalItem;
