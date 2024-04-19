import styled from '@emotion/styled';

export const Container = styled.div`
width: 360px;
position: relative;
padding-top: 100px
`

export const ImputWrapper = styled.div`
position: relative;
`
export const Label = styled.label`
color: ${props => props.theme.colors.lightGrey};
font-style: ${props => props.theme.fontSize.medium};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.5; /* 150% */
align-self: stretch;
margin-bottom: 8px;
`

export const InputLocation = styled.input`
width: 360px;
height: 56px;
padding-left: 44px;
border-radius: 10px;
background-color: ${props => props.theme.colors.whiteWarm};
outline-color: ${props => props.theme.colors.lightGrey};
border: none;
cursor: pointer;

color: ${props => props.theme.colors.primaty};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.25; /* 125% */
`

export const Icon = styled.img`
position: absolute;
top: 50%;
left: 18px;
transform: translateY(-50%);
`
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