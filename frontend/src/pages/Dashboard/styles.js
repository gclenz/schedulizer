import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 600px;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: none;
    }

    strong {
      margin: 0 1rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
  }
`;

export const Time = styled.li`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 3px rgba(75, 75, 75, 0.1);

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    color: ${props => (props.available ? '#5EBAAF' : '#514db2')};
    display: block;
    font-size: 1.25rem;
  }

  span {
    color: ${props => (props.available ? '#555' : '#333')};
    display: block;
  }
`;
