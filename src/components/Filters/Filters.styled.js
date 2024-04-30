import styled from '@emotion/styled';

export const Container = styled.div`
width: 360px;
position: relative;
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
border: 1px solid transparent;
outline-color: transparent;
outline-offset: 4px;
background-color: ${props => props.theme.colors.whiteWarm};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.25; /* 125% */
cursor: pointer;
transition: border-color, color 300ms cubic-bezier(0.4, 0, 0.2, 1);
&::placeholder {
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
&:focus {
    border-color: ${props => props.theme.colors.lightGrey};
    outline-color: transparent;
    outline-offset: 4px;
    &::placeholder {
    color: ${props => props.theme.colors.lightGrey};
    }
}
`
export const SpanIcon = styled.span`
position: absolute;
top: 50%;
left: 18px;
transform: translateY(-50%);
stroke: ${props => props.theme.colors.darkGrey};
transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);
`
export const StyledButton = styled.button`
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