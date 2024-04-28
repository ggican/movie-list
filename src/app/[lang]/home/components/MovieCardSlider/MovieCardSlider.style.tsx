import styled from 'styled-components';

export const MovieCardSliderStyle = styled.div`
  width: 100%;
  display: block;
  position: relative;
  border-radius: 20px;
  background: #fff;
  height: 300px;
  margin-bottom: 20px;
  img {
    display: block;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 24px;
  }
  .filter {
    position: absolute;
    content: '';
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00000052;
    border-radius: 20px;
  }
  .text {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
    padding: 20px;
    z-index: 2;
    p {
      font-size: 12px;
      font-weight: bold;
      font-family: 'poppins';
      color: #fadb14;
    }
    h1 {
      color: #fff;
      font-size: 34px;
      font-family: 'poppins';
    }
    span {
      color: #fff;
      font-weight: 400;
      font-size: 14px;
      font-family: 'poppins';
      padding: 0;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin: 0;
    }
  }
`;
