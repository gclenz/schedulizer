import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 2rem;
`;

export const Content = styled.div`
  height: 4rem;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 1px solid #eee;
    }

    a {
      color: #fc7750;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: #333;
    }

    a {
      color: #fc7750;
      display: block;
      margin-top: 0.1rem;
    }
  }

  img {
    align-self: center;
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
`;
