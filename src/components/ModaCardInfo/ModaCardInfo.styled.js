import styled from '@emotion/styled'

export const ModalWrapper = styled.div`
position: relative;
width: 982px;
height: 720px;
padding: 40px;
gap: 24px;
flex-shrink: 0;
border-radius: 20px;
background: ${props => props.theme.colors.white};
overflow: scroll;
`
export const Price = styled.p`
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height:1.25; /* 125% */
color: ${props => props.theme.colors.primary};
padding-right: 11px;
`

export const PriceWrapper = styled.div`
display: flex;
align-items: center;
`

export const StyledSVG = styled.svg`
fill: red
`

export const StyledCloseIcon = styled.img`
position: absolute;
top: 40px;
right: 40px;

`

export const ModalTitle = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`

export const ModalGalleryWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
gap: 16px;
margin-bottom: 24px;
`

export const ModalGalleryItem = styled.li`
width: 290px;

`

export const ModalImg = styled.img`
border-radius: 10px;
height: 310px;
object-fit: cover
`

export const ModalDescriptionText = styled.p`
height: 72px;
overflow: hidden;
color: ${props => props.theme.colors.darkGrey};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.5; /* 150% */
margin-bottom: 44px;
`

export const ModalNavWrapper = styled.nav`
& ::after {
    content: "";
    flex-shrink: 0;
    width: 902px;
    height: 1px;
    background-color: ${props => props.theme.colors.lightGrey};
    position: relative;
    top: 24px;
    left: -237px;
}

`


export const ModalNavListWrapper = styled.ul`
display: flex;
column-gap: 40px;
align-items: center;
margin-bottom: 68px;
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.medium2};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height: 1.2; /* 120% */
`

export const ModalNavButton = styled.button`
display: inline-block;

 & ::after{
    content: "";
    width: 30px;
    height: 2px;
    background-color: red;
}
`