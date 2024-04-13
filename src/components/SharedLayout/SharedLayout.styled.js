import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
&.active {
    color: ${props => props.theme.colors.red};
}
`