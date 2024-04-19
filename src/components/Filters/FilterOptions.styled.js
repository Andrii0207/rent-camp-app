import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
position: relative;
`

export const FilterWrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 32px;
margin-bottom: 64px;
`

export const FilterName = styled.p`
margin-top: 32px;
margin-bottom: 14px;
color: ${props => props.theme.colors.darkGrey};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.5; /* 150% */
`

export const Title = styled.h3`
margin-bottom: 48px;
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.medium2};
font-style:  ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height: 24px; /* 120% */

&::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.lightGrey};
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(24px);
}
`

export const FilterList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;

`

export const StyledCheckBox = styled.input`
display: flex;
justify-content: center;
align-items: center;
width: calc((100% - 2 * 8px) / 3);
height: 95px;
align-items: center;
gap: 8px;
border-radius: 10px;
border: 1px solid ${props => props.theme.colors.lightGrey};
mix-blend-mode: multiply;

`


export const Item = styled.li`
display: flex;
justify-content: center;
align-items: center;
width: calc((100% - 2 * 8px) / 3);
height: 95px;

align-items: center;
gap: 8px;

border-radius: 10px;
border: 1px solid ${props => props.theme.colors.lightGrey};
mix-blend-mode: multiply;

`

export const StyledInput = styled.button`
background-color: teal;
width: 50px;
height: 50px;

`