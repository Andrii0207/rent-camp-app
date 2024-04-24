import styled from '@emotion/styled'

export const Text = styled.p`
display: flex;
align-items: start;
justify-content: center;
height: 100vh;
color:  ${props => props.theme.colors.accent};
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.25; /* 125% */
padding-top: 200px;
`
