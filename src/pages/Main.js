import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addImage, loadImages, deleteImages, hideLoader, showLoader } from '../actions';
import { getRandomHash } from '../utils';
import Loader from '../components/Loader';
import Header from '../components/Header';

const MainBlock = styled.main`
  position: relative;
  height: calc(100vh - 80.67px)
`;

const Button = styled.button`
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

  &:last-child {
    margin-left: 30px;
  }

  &:hover {
    opacity: .7;
  }

  &:active {
    transform: scale(.95);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Figure = styled.figure`
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 30px 0;

  & img {
    max-width: 1200px;
  }
`;

const Error = styled.p`
  font-size: 30px;
  color: #E30B5C;
  text-align: center;
`;

export const Main = ({ history }) => {
  const images = useSelector(({ images }) => images);
  const error = useSelector(({ error }) => error);
  const isFetching = useSelector(({ isFetching }) => isFetching);

  const dispatch = useDispatch();
  
  const imageContainer = useRef(null);

  const removeImageContainerChildren = () => {
    const imageContainerChild = imageContainer.current.children[0];

    if (imageContainerChild) {
      imageContainer.current.removeChild(imageContainerChild);
    }
  };

  function loadImage(url) {
    return new Promise((resolve) => {
      const start = performance.now();
      const img = new Image();

      img.src = url;
      imageContainer.current.append(img);

      img.addEventListener('load', () => {
        resolve(start);
      });
    });
  }
  
  const getNewImage = (idx) => {
    const image = {
      id: getRandomHash(),
      name: images[idx]['name'],
      loadingTime: images[idx]['loadingTime'],
    };
    
    if (images[idx].hasOwnProperty('url')) {
      image.url = images[idx]['url'];
    } else if (images[idx].hasOwnProperty('webp')) {
      image.url = images[idx]['webp'];
    } else {
      const randomImageIdx = Math.floor(Math.random() * images.length);
      getNewImage(randomImageIdx);

      return;
    }
    
    loadImage(image.url)
      .then((start) => {
        image.loadingTime = performance.now() - start;
        dispatch(addImage(image));
        dispatch(hideLoader());
      })
  };

  const goTo = () => {
    history.push('/history');
    dispatch(deleteImages());
  };

  useEffect(() => { dispatch(loadImages()) }, [dispatch]);

  useEffect(() => {
    const randomResourceIdx = Math.floor(Math.random() * images.length);
    
    dispatch(showLoader());
    images.length > 0 && getNewImage(randomResourceIdx);

    return () => removeImageContainerChildren();
  }, [images]);
  
  return (
    <>
      <Header>
        <Button onClick={() => dispatch(loadImages())} disabled={error}>Загрузить</Button>
        <Button onClick={goTo} disabled={error}>История</Button>
      </Header>
      { error ?
        <Error>{ error }</Error> :
        (
          <MainBlock>
            { isFetching && <Loader /> }
            <Figure ref={imageContainer} />
          </MainBlock>
        )
      }
    </>
  );
};