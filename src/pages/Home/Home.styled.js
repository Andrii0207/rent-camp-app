import styled from '@emotion/styled'

export const List = styled.ul`
 
`;

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
padding-top: 90px;

`

export const MainSection = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const Hero = styled.div`
height: 500px;
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 22px;
padding-top: 150px;
padding-left: 250px;
background-image: url(https://images.prismic.io/indiecampers-demo/5d1cbbcf-c6c7-4e8b-9d1a-f338ffbb8fae_Indie_Campers_60.jpg?auto=compress,format&rect=0,93,2253,1503&w=1360&q=30&ar=20:7&fit=crop);
`

export const Title = styled.h2`
font-size: 48px;
color: ${props => props.theme.colors.accent};
font-size: 72px;
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height: 1.25; /* 125% */

`


export const Footer = styled.footer`

`

export const FooterWrapper = styled.div`
height: 80px;
border-top: 1px solid ${props => props.theme.colors.lightGrey};
display: flex;
align-items: center;
justify-content: center;
`
export const NameWrapper = styled.div`
display: flex;
gap: 15px;
width: 250px;
`

export const Name = styled.p`
text-align: center;
color: ${props => props.theme.colors.primary};
font-size:  ${props => props.theme.fontSize.medium};;
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height: 1.25; /* 125% */
`

export const Position = styled.p`
text-align: center;
color: ${props => props.theme.colors.primary};
font-size:  ${props => props.theme.fontSize.medium};;
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.medium};
line-height: 1.25; /* 125% */
`


export const ContactList = styled.ul`
height: 80px;
display: flex;
justify-content: center;
align-items: center;
column-gap: 50px;

`

export const ContactItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const SpanIcon = styled.span`

& :hover {
   fill: ${props => props.theme.colors.accent};
}
`
