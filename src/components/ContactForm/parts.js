import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled.div`
  background-color: #3e3e3e;
  border-radius: 15px;
  grid-area: 2/11/10/3;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const FormWrapper = styled(Form)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 5%;
  flex-direction: column;
`;

export const FormTitle = styled.span`
  position: relative;
  align-self: flex-start;
  color: ${({ theme }) => theme.pink};
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 30px 0;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: ${({ theme }) => theme.pink};
  }
`;

export const CooperateInfo = styled.p`
  align-self: flex-start;
  margin: 0 0 20px 40px;
  color: ${({ theme }) => theme.gray};
  user-select: none;
`;
