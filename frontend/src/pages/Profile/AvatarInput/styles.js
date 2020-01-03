import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 1rem;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      background-color: #eee;
      border: 3px solid #ff7750;
      border-radius: 50%;
      height: 120px;
      min-height: 120px;
      width: 120px;
      min-width: 120px;
    }

    input {
      display: none;
    }
  }
`;
