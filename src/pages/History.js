import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { deleteImage } from '../actions';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  border: 15px solid transparent;
  flex: 1 16%;
  max-width: 300px;

  & > div {
    position: relative;
    text-align: center;
    padding: 23px;
    border-radius: 20px;
    box-shadow: 1px 3px 42px rgba(0,0,0,.3);
  }

  & > div > img {
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2e4d50;

  & > dd {
    margin: 0;
    width: 115px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: -23px;
  left: 50%;
  transform: translateX(-50%);
  background: #E30B5C;
  border: none;
  outline: none;
  padding: 15px 40px;
  border-radius: 15px;
  color: #fff;
  text-transform: uppercase;
  opacity: .8;
  cursor: pointer;
  transition: .2s all;

  &:hover {
    opacity: .9;
  }

  &:active {
    transform: scale(.95) translateX(-50%);
  }
`;

const StyledLink = styled(Link)`
  background: #fff;
  opacity: .8;
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
  transition: .2s all;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  box-shadow: -2px 3px 22px rgba(0,0,0,0.2);
  text-decoration: none;
  color: #000;

  &:hover {
    opacity: .7;
  }

  &:active {
    transform: scale(.95);
    color: #000;
  }
`;

const EmptyListTitle = styled.p`
  font-size: 30px;
  text-align: center;
  width: 100%;
`;

export const History = () => {
  const images = useSelector(({ history }) => history);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(10);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Header>
        <StyledLink to="/">Главная</StyledLink>
      </Header>

      <List>
        { 
          currentImages.length === 0 ?
          <EmptyListTitle>Загруженных изображений пока нет</EmptyListTitle> :
          currentImages.map((image, idx) => {
            const loadingTimeInSeconds = (image.loadingTime / 1000).toFixed(3);

            return (
              <ListItem key={idx}>
                <div>
                  <img
                    src={image.url}
                    alt={image.name}
                  />
                  <dl>
                    <Wrapper>
                      <dt>Название:</dt>
                      <dd>{image.name}</dd>
                    </Wrapper>
                    <Wrapper>
                      <dt>Время загрузки:</dt>
                      <dd>{ `${loadingTimeInSeconds} сек.` }</dd>
                    </Wrapper>
                  </dl>
                  <Button onClick={() => dispatch(deleteImage(image))}>Удалить</Button>
                </div>
              </ListItem>
            )
          })
        }
      </List>

      <Pagination
        paginate={paginate}
        totalImages={images.length}
        imagesPerPage={imagesPerPage}
      />
    </>
  );
};