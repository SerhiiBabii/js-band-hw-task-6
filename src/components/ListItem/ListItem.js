import React, { useState } from 'react';
import './ListItem.css'

const ListItem = ({
  id,
  title,
  description,
  priority,
  status,
  deleteItem,
  onToggleDone,
  setCurrentFields,
}) => {
  const [visible, changeVisible] = useState(false);
  return (
    <div className="col-3 mb-2 p-4">
      <div className={status === 'done' ? 'done card p-2' : 'card p-2'}>
        <p className="">Title: {title}</p>
        <p className="">Description: {description}</p>
        <div className="">
          <p className="">Priority: {priority}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              changeVisible(!visible);
            }}
          >
            ...
          </button>
          <div className={visible ? 'visible' : 'invisible'}>
            <button
              className="btn btn-success"
              name="done"
              onClick={() => {
                onToggleDone(id);
              }}
            >
              done
            </button>
            <button className="btn btn-secondary" name="edit" onClick={() => setCurrentFields(id)}>
              edit
            </button>
            <button className="btn btn-danger" name="delete" onClick={() => deleteItem(id)}>
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
