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
export const FilterList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
`
export const Item = styled.li`
border-radius: 10px;
border: 1px solid ${props => props.theme.colors.lightGrey};
mix-blend-mode: multiply;
width: calc((100% - 2 * 10px) / 3);
transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
border-color: ${props => props.theme.colors.accent};
}
`
export const ButtonOption = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 112px;
height: 95px;
`
export const WrapperIcon = styled.span`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
stroke: ${props => props.theme.colors.primary};
text-align: center;
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.25; /* 125% */
`

