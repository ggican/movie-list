/* eslint-disable @next/next/no-img-element */
'use client';
import styled from 'styled-components';

export const NotFoundPageStyle = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: contain;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundPageStyle>
      <img
        src='https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000&t=st=1714324711~exp=1714325311~hmac=7149ee0b01dad9798750f6c7a3a0ab8f9da904d514d8845b4e77ea785a94748e'
        alt='404-not-found'
      />
    </NotFoundPageStyle>
  );
}

export default NotFoundPage;
