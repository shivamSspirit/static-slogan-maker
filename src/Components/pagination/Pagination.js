import React from 'react'
import './pagination.css'
import { HiOutlineChevronRight } from "react-icons/hi";

function Pagination() {
  return (
    <>
      <div className="pagination">
        <ul className="pagination-btn-block">
          <li>
            <button className="pagination-btn">1</button>
          </li>
          <li>
            <button className="pagination-btn">2</button>
          </li>
          <li>
            <button className="pagination-btn">3</button>
          </li>
          <li>
            <button className="pagination-btn">...</button>
          </li>
          <li>
            <button className="pagination-btn">21</button>
          </li>
        </ul>
        <button className="btn next-btn">
          Next <HiOutlineChevronRight />
        </button>
      </div>
    </>
  )
}

export default Pagination




