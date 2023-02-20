import React from 'react';
import Table from '../../features/Table';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const Home = () => {

const tables = useSelector(getAllTables)

  return (
    <div>
    <h1 className="mb-5">All tables</h1>
    {tables.map((table) => (
      <Table
        key={table.id}
        id={table.id}
        number={table.id}
        status={table.status}
        people={table.people}
        maxPeople={table.maxPeople}
        bill={table.bill}
      />
    ))}
  </div>
  );


};

export default Home;