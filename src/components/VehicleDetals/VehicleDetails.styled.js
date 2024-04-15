import styled from '@emotion/styled'

export const Conrainer = styled.div`
width: 430px;
height: 286px;
`

export const Title = styled.h3`
 color: ${props => props.theme.colors.primary};
 font-size: ${props => props.theme.fontSize.medium2};
 font-style: ${props => props.theme.fontStyle.normal};
 font-weight: ${props => props.theme.fontWeight.heavy};
 line-height: 1.2; /* 120% */
 margin-bottom: 48px;

 &::before {
    content: "";
    width: 150px;
    height: 1px;
    background-color: red;
 }
`
export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 14px;
`


export const Item = styled.li`
display: flex;
justify-content: space-between;
width: 430px;
color: ${props => props.theme.colors.primary};
text-align: center;
font-size: ${props => props.theme.fontSize.medium3};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.33; /* 133.333% */
`