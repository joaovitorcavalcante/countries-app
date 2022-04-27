import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 1.4rem 3.2rem;
  margin-top: 2.4rem;

  background-color: ${({ theme }) => theme.colors.elements};

  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

export const SearchIcon = styled(IoSearch)``;

export const Input = styled.input`
  width: 100%;
  margin-left: 2.6rem;
  border: 0;
  outline: 0;

  font-size: 1.2rem;
  line-height: 2rem;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;
