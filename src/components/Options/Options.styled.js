import styled from "@emotion/styled";


export const OptionList = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 8px;
margin-bottom: 24px;
`

export const OptionItem = styled.li`
padding: 12px 18px;
border-radius: 100px;
background: ${props => props.theme.colors.whiteCold};
mix-blend-mode: multiply;

color: ${props => props.theme.colors.primary};
text-align: center;
font-size:  ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.25; /* 125% */
`