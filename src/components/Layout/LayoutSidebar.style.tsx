import styled from 'styled-components';

export const LayoutSidebar = styled.div`
  width: 100%;
  display: block;
  padding: 12px 20px;
  opacity: 1;
  transition: all 0.1s ease-in-out;
  p {
    font-size: 24px;
    font-weight: 400;
    font-family: 'poppins';
    color: #2a2a2a;
  }
  .title {
    margin-top: 20px;
    padding: 8px 0;
    border-bottom: 2px solid #2a2a2a;
    h4 {
      padding: 0;
      font-weight: bold;
      color: #2a2a2a;
      font-family: 'poppins';
    }
  }

  .sidebar-list {
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 10px;

    &-image {
      display: inline-flex;
      width: 80px;
      height: 80px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-title {
      width: calc(100% - 90px);
      display: inline-flex;
      flex-direction: column;
      h4 {
        font-size: 13px;
        font-weight: bold;
        font-family: 'poppins';
        color: #2a2a2a;
      }
      p {
        padding: 0;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        font-family: 'poppins';
      }
    }
    &:hover {
      opacity: 0.3;
      transition: all 0.1s ease-in-out;
    }
  }
`;
