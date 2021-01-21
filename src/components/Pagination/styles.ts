import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  & .previous-button {
    width: fit-content;
    padding: 0 8px 0 8px;
    height: 36px;
    box-shadow: 0 2px 0 0 #dfdfdf;
    background-color: #fff;
    border: none;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background-color: #dedede;
    }
  }

  & .next-button {
    width: fit-content;
    height: 36px;
    padding: 0 8px 0 8px;
    box-shadow: 0 2px 0 0 #dfdfdf;
    background-color: #fff;
    border: none;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background-color: #dedede;
    }
  }
`;

export const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 36px;
    height: 36px;
    box-shadow: 0 2px 0 0 #dfdfdf;
    background-color: #fff;
    border: none;
    font-weight: bold;
    transition: background-color 0.4s;

    & + button {
      margin-left: 4px;
    }

    &:hover {
      background-color: #dedede;
    }
  }
`;
