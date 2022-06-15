import React, { useEffect, useState } from 'react';
import './Selector.css'
import Select from 'react-select';

export function Selector({ optionsR, setCodigo, nameLabel }) {
  const options = [];
  optionsR.map((color) => {
    options.push({ value: color.code, label: color.name });
  });

  const [valorOptions, setValorOptions] = useState(options[0]);

  useEffect(() => {
    setCodigo(options[0].value);
  }, []);

  const onDropDownChange = (value) => {
    setValorOptions(value);
    setCodigo(value.value);
  };
  return (
    <div className="container-selector">
      <label className="label">
        {nameLabel}
        :
        {' '}
      </label>
      <Select
        className="selector-item"
        value={valorOptions}
        defaultValue={options[0]}
        options={options}
        onChange={onDropDownChange}
      />
    </div>
  );
}
