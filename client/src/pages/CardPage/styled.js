import styled from 'styled-components';

export const Notice = styled.div`
  border: 2px solid orange;
  border-radius: 5px;
  padding: 16px;
  font-weight: 800;
  margin: 8px 0;
`;

export const Container = styled.div``;

export const IMG = styled.div`
  aspect-ratio: 16/9;
  border: 1px solid fuchsia;
  & img {
    //width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  position: sticky;
  top: 10px;
  z-index: 1500;
  text-align: center;
`;

export const Body = styled.div`
  position: relative;
  padding: 32px;
  & b:nth-child(1) {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    border: 5px ridge #0652dd;
    border-width: 5px 0 0 5px;
  }

  & b:nth-child(2) {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 5px groove #0652dd;
    border-width: 0 5px 5px 0;
  }
`;
