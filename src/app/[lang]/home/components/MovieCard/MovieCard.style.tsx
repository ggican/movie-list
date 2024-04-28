import { Card, CardProps } from 'antd';
import styled from 'styled-components';

export const CardStyle = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 4px 7px 13px 1px #545454bd;
  .movie-card {
    &--filter {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #0606063d;
      z-index: 1;
      border-radius: 16px;
      transition: all 0.3s ease-in-out;
    }
    &--love {
      background-color: #fff;
      position: absolute;
      border-radius: 50%;
      top: 10px;
      right: 10px;
      box-shadow: 3px 3px 7px 0px #8181813d;
      z-index: 9;
    }
    &--image {
      position: relative;
      width: 100%;
      height: 400px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        display: block;
      }
    }
    &--body {
      position: absolute;
      bottom: 0;
      padding: 12px 16px;
      z-index: 3;
      width: 100%;
      border-top-left-radius: 50px;
      left: 0;
      right: 0;
      transition: all 0.7s ease-in-out;
      > h4 {
        font-size: 32px;
        font-family: 'poppins';
        color: #fff;
        line-height: 1.2em;
        transition: all 0.7s ease-in-out;
      }
      > span {
        font-family: 'poppins';
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        display: block;
        transition: all 0.3s ease-in-out;
      }
      p {
        font-family: 'poppins';
        font-size: 14px;
        color: #fff;
        padding: 0;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        transition: all 0.3s ease-in-out;
      }

      .ant-rate-star.ant-rate-star-zero {
        .anticon svg {
          color: #c6c6c6;
        }
      }
    }
  }

  &:hover {
    .movie-card {
      &--filter {
        background: transparent;
        transition: all 0.3s ease-in-out;
      }
      &--image {
        position: relative;
        width: 100%;
        height: 400px;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          display: block;
        }
      }
      &--body {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all 0.7s ease-in-out;
        > h4 {
          text-align: center;
          transition: all 0.7s ease-in-out;
        }
        > span {
          color: #fadb14;
          transition: all 0.3s ease-in-out;
          text-align: center;
        }
        > p {
          -webkit-line-clamp: 10;
          text-align: center;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`;
