import styled from "@emotion/styled";

export const StyledButton = styled.button`
/* display: flex; */
justify-content: center;
align-self: center;
padding: 16px 40px;
border-radius: 200px;
background-color: ${props => props.theme.colors.red};

color: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.5; /* 150% */
letter-spacing: -0.08px;

&:hover,
&:focus {
background-color: ${props => props.theme.colors.accent};
}
`