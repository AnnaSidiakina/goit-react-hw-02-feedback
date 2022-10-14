import styled from 'styled-components';

export const SectionContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.text};
`;
