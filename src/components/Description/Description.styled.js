import styled from '@emotion/styled'

export const Text = styled.p`
margin-bottom: 24px;
overflow: hidden;
text-overflow: ellipsis;

color: ${props => props.theme.colors.darkGrey};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.5; /* 150% */
`