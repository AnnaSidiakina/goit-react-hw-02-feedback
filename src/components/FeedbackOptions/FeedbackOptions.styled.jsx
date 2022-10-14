import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  padding: 20px;
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
  }
`;
