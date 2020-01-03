import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: none;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 0.5rem;
        height: 0.5rem;
        background: #fc7750;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  left: calc(50% - 130px);
  position: absolute;
  width: 260px;
  top: calc(100% + 30px);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
  box-shadow: 0px 2px 3px rgba(75, 75, 75, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.3);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 303px;
`;

export const Notification = styled.div`
  background-color: #514db2;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 3px rgba(75, 75, 75, 0.1);
  margin: 0.5rem;
  padding: 0.5rem;

  p {
    color: #fff;
    font-size: 0.85rem;
    line-height: 1rem;
  }

  time {
    color: #fff;
    font-size: 0.75rem;
  }

  button {
    background: none;
    border: none;
    border-left: 1px solid #fc7750;
    box-shadow: 0px 2px 3px rgba(75, 75, 75, 0.1);
    color: #fff;
    font-size: 0.75rem;
    margin: 0 0.5rem;
    padding-left: 0.5rem;
    transition: background-color 0.5s;
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        background: #fc7750;
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 0.5rem;
        width: 0.5rem;
      }
    `}
`;
