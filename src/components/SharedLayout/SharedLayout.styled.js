import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Container = styled.div`

`

export const Header = styled.header`
position: relative;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
position: fixed;
z-index: 999;
margin: 25px 0;
background-color: ${props => props.theme.colors.white};
`

export const HeaderNav = styled.nav`
/* position: absolute; */
width: 100vw;
padding-bottom: 25px;
border-bottom: 1px solid ${props => props.theme.colors.lightGrey};

`

export const StyledLink = styled(NavLink)`
&.active {
    color: ${props => props.theme.colors.accent};
    border-bottom: 20px;
    padding-bottom: 25px;
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
