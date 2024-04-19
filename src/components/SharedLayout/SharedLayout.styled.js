import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
position: relative;
width: 100vh;
`

export const Header = styled.header`
height: 70px;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
position: fixed;
z-index: 999;
background-color: ${props => props.theme.colors.white};
`

export const HeaderNav = styled.nav`
& ::after {
    content: "";
    width: 100vw;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
    position: absolute;
    top: 70px;
    right: 20;
}
`

export const StyledLink = styled(NavLink)`
&.active {
    color: ${props => props.theme.colors.accent};
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
