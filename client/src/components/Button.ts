import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0px 12px;
  margin: 4px 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  border-radius: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  width: 100%;
  color: rgb(255, 255, 255);
  background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 100%);

  &::after {
    background: linear-gradient(rgb(14, 190, 240) 0%, rgb(0, 133, 255) 50%);
  }
`;
