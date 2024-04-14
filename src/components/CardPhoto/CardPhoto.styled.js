import styled from '@emotion/styled'

export const PhotoWrapper = styled.div`
min-width: 290px;
height: 310px;
border-radius: 10px;
border: 1px solid ${props => props.theme.colors.lightGrey};
background-size: cover;
`

export const StyledPhoto = styled.img`
border-radius: 10px;
flex-shrink: 0;
`   