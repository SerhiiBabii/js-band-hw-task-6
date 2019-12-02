import React from 'react';
import SelectField from '../SelectField/SelectField';
import InputField from '../InputField/InputField';

const Header = ({ search, status, priority, handleSelect, showModalArea }) => {
  return (
    <div className="input-group">
      <hr/>
      <InputField value={search} onChange={handleSelect} name="search" type="text" placeholder="search by title" />
      <SelectField value={status} onChange={handleSelect} name="status" items={['all', 'open', 'done']} />
      <SelectField value={priority} onChange={handleSelect} name="priority" items={['all', 'high', 'normal', 'low']} />
      <button className="btn btn-primary" onClick={showModalArea}>
        Create
      </button>
      <hr/>
    </div>
  );
};

export default Header;
