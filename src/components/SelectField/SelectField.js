import React from 'react';
import SelectItem from '../SelectItem/SelectItem';

const SelectField = ({ name, items, onChange, value }) => {
  return (
    <select className="list" name={name} value={value} onChange={onChange}>
      {items.map((item) => {
        return <SelectItem key={item} value={item} />;
      })}
    </select>
  );
};

export default SelectField;
