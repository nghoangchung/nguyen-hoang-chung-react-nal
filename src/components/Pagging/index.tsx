import React from 'react';
import { Pagination } from 'react-bootstrap';

interface Props {
  item: any[];
}
const Pagging = (props? : Props) => {
    return (
        <div >
          <Pagination>           
            <Pagination.Prev />

            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

        </div>
    )
}

export default Pagging;