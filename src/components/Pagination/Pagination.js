import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 30px;

  & > li:not(:last-child) {
    margin-right: 15px;
  }

  & > li > button {
    border: none;
    outline: none;
    background: #fff;
    padding: 20px 25px;
    border-radius: 121px;
    font-size: 18px;
    box-shadow: 1px 1px 21px rgba(0,0,0,.2);
    cursor: pointer;

    &:hover {
      opacity: .8;
    }

    &:active {
      transform: scale(.95);
    }
  }
`;

export const Pagination = ({ totalImages, imagesPerPage, paginate }) => {
  const pagesNumbers = [];

  for (let i = 1; i <=  Math.ceil(totalImages / imagesPerPage); i++) {
    pagesNumbers.push(i);
  }

  return (
    <nav>
      <PaginationList>
        {
          pagesNumbers.map((number, idx) => (
            <li key={idx}>
              <button onClick={() => paginate(number)}>
                { number }
              </button>
            </li>
          ))
        }
      </PaginationList>
    </nav>
  );
};

Pagination.propTypes = {
  paginate:PropTypes.func.isRequired,
  totalImages: PropTypes.number.isRequired,
  imagesPerPage: PropTypes.number.isRequired,
};