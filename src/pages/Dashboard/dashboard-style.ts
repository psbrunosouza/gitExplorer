import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

const shake = keyframes`
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(24px);
  }

  50% {
    transform: translateX(0px);
  }

  75% {
    transform: translateX(24px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin: 8px 0 0 16px;
  animation: 0.3s ${shake} ease-out;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  line-height: 56px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
