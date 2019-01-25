import styled from 'styled-components';

export const Author = styled.p`
  color: #999;
  margin: 5px 0;
`;

export const BookCover = styled.div`
  width: 128px;
  height: 193px;
  background-image: url(${bg => (bg && bg.bg) || 'http://via.placeholder.com/128x193'});
`;
