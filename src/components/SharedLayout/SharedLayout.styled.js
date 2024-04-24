import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Container = styled.div`
`

export const IconWrapper = styled.span`
stroke: ${props => props.theme.colors.darkgrey};
stroke-width: 2px;
margin-left: 15px;
`

export const Title = styled.a`
color: ${props => props.theme.colors.accent};
font-size: 36px;
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height: 1.25; /* 125% */
letter-spacing: 1%;
display: flex;
align-items: center;
`

export const SpanTitle = styled.span`
color: ${props => props.theme.colors.darkGrey};
display: flex;
align-items: center;

`

export const Header = styled.header`
position: relative;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
position: fixed;
z-index: 999;
background-color: ${props => props.theme.colors.white};
`

export const HeaderNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;
padding: 15px 100px;
border-bottom: 1px solid ${props => props.theme.colors.lightGrey};

`

export const StyledLink = styled(NavLink)`
&.active {
    color: ${props => props.theme.colors.accent};
    border-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 4px solid ${props => props.theme.colors.accent};
}

& ::after {
    content: "";
    width: 20px;
    height: 5px;
    background-color: red;
}
 

&:hover {
    color: ${props => props.theme.colors.accent}
}
`

export const HeaderList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
column-gap: 50px;
`

export const MenuItem = styled.li`
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height:1.25; /* 125% */

`
