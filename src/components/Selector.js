import React, { useEffect, useState } from 'react';
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
    <div style={{
      padding: '1%', width: '50%', display: 'flex', alignSelf: 'flex-end',
    }}
    >
      <label style={{ padding: '3.5%', flex: '1' }}>
        {nameLabel}
        :
        {' '}
      </label>
      <Select
        styles={{ flex: '1' }}
        value={valorOptions}
        defaultValue={options[0]}
        options={options}
        onChange={onDropDownChange}
      />
    </div>
  );
}
