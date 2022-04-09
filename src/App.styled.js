import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  /* align vertical / */
  /* justify-content: center; */

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export const Loader = styled.div`
  margin-top: 25px;
`;
