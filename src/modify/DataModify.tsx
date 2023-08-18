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
  const handleClear = (index: number) => {
    const newDataList = [...dataList];
    newDataList.splice(index , 1);
    setDataList(newDataList);
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
        <button className = 'btn btn-primary' type="submit">Add</button>
      </form>
      <ul>
        {dataList.map((data, index) => (
          <li key={index}>{data}
         <button onClick={() => handleClear(index)} className='btn btn-outline-danger'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataModify;
