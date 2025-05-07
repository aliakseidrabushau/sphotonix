import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: left;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const LabelText = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: rgba(219, 219, 219, 1);
  text-align: left;
  margin-bottom: 8px;
`;

export const Mandatory = styled.span`
  color: rgba(247, 65, 65, 1);
`;
