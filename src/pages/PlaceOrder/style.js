import styled from 'styled-components';
import { scale } from 'assets/utils/modular-scale';
import theme from 'assets/styles/theme';

export const ContainerCardDashboard = styled.div`
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  div:nth-child(3) {
    margin-left: ${scale.ms6};
    margin-right: ${scale.ms6};
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  div {
    margin-right: ${scale.ms4};
  }
`;

export const ContainerClientsSugesttons = styled.div`
  display: block;
  margin-top: ${scale.ms6};
  background-color: ${theme.color.colorQuinary};
  padding: ${scale.ms6};
  border-radius: ${scale.ms5};
  ul {
    margin-top: ${scale.ms6};
    list-style: none;
    li {
      padding-bottom: ${scale.ms6};
      padding-top: ${scale.ms6};
      border-bottom: 1px solid ${theme.color.colorSecondary};
      :hover {
        cursor: pointer;
        background-color: ${theme.color.colorTertiary};
      }
    }
  }
`;

export const ContainerOrderAndResume = styled.div`
  margin-top: ${scale.ms8};
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  th {
    padding: 12px;
    width: 33%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  td {
    padding: 12px;
    width: 33%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
`;
