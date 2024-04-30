import styled from '@emotion/styled'

export const FormWrapper = styled.div`
min-width: 448px;
height: 532px;
padding: 24px;
border-radius: 20px;
border: 1px solid ${props => props.theme.colors.lightGrey};
`
export const Title = styled.h2`
margin-bottom: 8px;
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.medium2};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};;
line-height: 1.2; /* 120% */
`
export const Text = styled.p`
margin-bottom: 24px;
color: ${props => props.theme.colors.darkGrey};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.5; /* 150% */
`
export const FormData = styled.form`
display: flex;
flex-direction: column;
row-gap: 14px;
height: 324px;
border-radius: 20px;
margin-bottom: 24px;
`
export const InputWrapper = styled.div`
position: relative;
`
export const Input = styled.input`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 18px 18px 18px 18px;
gap: 10px;
width: 100%;
height: 56px;
border-radius: 10px;
border-color: transparent;
outline-color: transparent;
outline-offset: 4px;
background: ${props => props.theme.colors.whiteWarm};
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontSize.medium};
font-weight: ${props => props.theme.fontWeight.normal};
transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
&:focus {
    border: 1px solid rgba(16, 24, 40, 0.20);
    color: ${props => props.theme.colors.primary};
    &::placeholder {
        color: ${props => props.theme.colors.lightGrey}
    }
}
&::placeholder{
color: ${props => props.theme.colors.lightGrey2};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontSize.medium};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.25; /* 125% */
}
`
export const TextAria = styled.textarea`
width: 100%;
height: 114px;
padding: 18px;
border-radius: 10px;
border-color: transparent;
outline-color: transparent;
outline-offset: 4px;
background-color: ${props => props.theme.colors.whiteWarm};
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontSize.medium};
font-weight: ${props => props.theme.fontWeight.normal};
resize: none;
&:focus {
    border: 1px solid rgba(16, 24, 40, 0.20);
    color: ${props => props.theme.colors.primary};
    &::placeholder {
        color: ${props => props.theme.colors.lightGrey}
    }
}
&::placeholder{
font-family: Inter;
color: ${props => props.theme.colors.lightGrey2};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontSize.medium};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 20px; 
}
`
export const IconWrapper = styled.span`
position: absolute;
top: 50%;
right: 18px;
cursor: pointer;
transform: translateY(-50%);
stroke: ${props => props.theme.colors.primary};
&:hover,
&:focus {
    stroke: ${props => props.theme.colors.accent};
}
`
export const StyledButton = styled.button`
display: flex;
align-self: center;
padding: 16px 60px;
border-radius: 200px;
background-color: ${props => props.theme.colors.red};
color: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.5; /* 150% */
letter-spacing: -0.08px;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
background-color: ${props => props.theme.colors.accent};
}
`

