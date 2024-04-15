import styled from '@emotion/styled'


export const List = styled.ul`
display: flex;
flex-direction: column;
row-gap: 24px;
`


export const TitleWrapper = styled.div`
display: flex;
align-items: center;
column-gap: 16px;
margin-bottom: 16px;
`

export const Avatar = styled.div`
min-width: 60px;
height: 60px;
border-radius: 50%;
background: ${props => props.theme.colors.whiteCold};
`
export const Letter = styled.p`
display: inline-block;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height: 1.25; /* 125% */
color: ${props => props.theme.colors.red};
`

export const NameRatingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
`

export const Text = styled.p`
color: ${props => props.theme.colors.darkGrey};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.5; /* 150% */
`

