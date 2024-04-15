import styled from '@emotion/styled'


export const FormWrapper = styled.div`
/* display: flex; */
/* flex-direction: column; */
width: 448px;
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
height: 324px;
border-radius: 20px;
margin-bottom: 24px;
border: 1px solid ${props => props.theme.colors.lightGrey};
`

export const StyledButton = styled.button`
display: flex;
/* justify-content: center; */
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

&:hover,
&:focus {
background-color: ${props => props.theme.colors.accent};
}
`

