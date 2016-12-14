import React from 'react';
import withEvents from '../../hocs/withEvents';
import styled from 'styled-components';

const ButtonContent = withEvents(
  ({ className, children }) => (
    <button className={className}>{children}</button>
  )
);

const Button = styled(ButtonContent)`
  background-color: #eee;
  border: 1px solid #aaa;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin: 20px;
`;

export default Button;
