import React from 'react'
import styled from 'styled-components'

interface Props {
     children: React.ReactNode
 }

const Container = styled.div` 
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
  font-weight: bold;
  box-shadow: 5px 15px 30px rgba(0,0,0,0.3);

`;

const Card: React.FC<Props> = ({ children }) => {
     return(
          <Container>{children}</Container>
     )
}

export default Card