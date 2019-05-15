import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const IframeWrapper = styled.iframe`
   width: 100vw;
   height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
   min-height: 100vh;
   min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const ScrollDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
  font-size: 16px;
  /* text-decoration: none; */
  color: white;
  cursor: pointer;
  :hover {
    color: #15697A;
  }
`;

export const MainPage = styled.div`
  height: 1000px;
`;

export const Subtitle = styled.div`
  align-self: center;
  font-family: 'Catamaran';
`;

export const Title = styled.div`
  align-self: center;
  font-size: 26px;
  font-weight: bold;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: space-between;
`;

export const VimeoWrapper = styled.div`
   /* position: fixed; */
   /* TODO ^this prevents the overflow :( */
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: -1;
   overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  font-family: 'Futura';
`;
