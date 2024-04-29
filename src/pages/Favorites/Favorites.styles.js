import styled from '@emotion/styled'

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
padding-top: 100px;
`

export const Text = styled.p`
color:  ${props => props.theme.colors.primary};;
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.25; /* 125% */
margin-top: 100px;
`