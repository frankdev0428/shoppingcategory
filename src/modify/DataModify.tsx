// DataModify.tsx
import React, { useState } from 'react';
import styles from './DataModify.module.css'
interface DataModifyProps {
  // Define props here if needed
}

const DataModify: React.FC<DataModifyProps> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setDataList((prevDataList) => [...prevDataList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={styles.dataModify}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter data"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {dataList.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataModify;
