import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tablesRedux';

const EditTable= () => {

  const { id } = useParams();
  // const editTables = useSelector(state => getTableById(state, id))

  return (
    <p>234</p>
  );

};

export default EditTable;