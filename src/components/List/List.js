import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = (props) => {
  const { todoList, deleteItem, onToggleDone, addItem, setCurrentFields } = props;
  return (
    <div className="col-12">
      <div className="row">
        {todoList.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              priority={item.priority}
              status={item.status}
              title={item.title}
              description={item.description}
              deleteItem={deleteItem}
              onToggleDone={onToggleDone}
              addItem={addItem}
              setCurrentFields={setCurrentFields}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
