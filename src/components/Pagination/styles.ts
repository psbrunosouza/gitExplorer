import styled from 'styled-components';

export const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

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
