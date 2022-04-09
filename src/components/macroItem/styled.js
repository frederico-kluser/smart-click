import styled from 'styled-components';

const heightStyle = `
  height: 50px;
  line-height: 50px;
`;

const borderStyle = '1px solid #212121';

const Container = styled.div`
  ${heightStyle}
  background: #FFFFFF;
  border: ${borderStyle};
  border-radius: 4px;
  margin-bottom: 15px;
  width: calc(100% - 32px);

  display: flex;
  flex-direction: row;
  align-items: center;
  /* align vertical / */
  /* justify-content: center; */
`;

const General = `
  ${heightStyle}
  border-right: ${borderStyle};
  text-align: center;
  width: 10%;
`;

export const Number = styled.div`${General}`;

export const Name = styled.div`
  ${heightStyle}
  border-right: ${borderStyle};
  padding-left: 16px;
  width: 70%;
`;

export const Edit = styled.div`${General}`;

export const Delete = styled.div`${General}
  border-right: none;
`;

export default Container;
