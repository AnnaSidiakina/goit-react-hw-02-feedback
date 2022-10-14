import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(2, 50%);
  gap: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 70px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Value = styled.span`
  display: block;
  width: 100%;
  color: ${p => p.theme.colors.accent};
  margin-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
`;

export const Name = styled.span`
  display: block;
`;
