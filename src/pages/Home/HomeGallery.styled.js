import styled from '@emotion/styled'

export const GalleryList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 22px;
margin-bottom: 22px;
padding: 0 32px;
`

export const GalleryItem = styled.li`
width: 300px;
background-color: ${props => props.theme.colors.lightGrey};
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 15px;
`

export const ImageItem = styled.img`
border-top-right-radius: 15px;
border-top-left-radius: 15px;
`
export const NameCard = styled.p`
height: 25px;
display: flex;
align-items: center;
padding-left: 15px;

color: ${props => props.theme.colors.primary};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`