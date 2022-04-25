import { IoMoonOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 4rem 0;

  background-color: ${({ theme }) => theme.colors.elements.general};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 343px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 2rem;
`;

export const ToggleTheme = styled.button`
  display: flex;

  border: 0;

  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6rem;

  background-color: ${({ theme }) => theme.colors.elements.general};
`;

export const Icon = styled(IoMoonOutline)`
  margin-right: 0.8rem;
`;
