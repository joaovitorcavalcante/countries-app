import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const Button = styled.button``;

export const FilterList = styled.div`
  padding: 1.4rem 2.4rem;

  border: 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
`;

export const FilterItem = styled.div``;
