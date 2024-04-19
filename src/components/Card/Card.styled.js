import styled from '@emotion/styled'


export const WrapperCard = styled.section`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;
gap: 24px;
max-width: 888px;
padding: 24px;

background-color: ${props => props.theme.colors.white};
border: 1px solid rgba(16, 24, 40, 0.20);
border-radius: 20px;
`

export const InfoCardWrapper = styled.div`
max-width: 526px;

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

export const TitleCommonWrapper = styled.div`
display: flex;
align-items: start;
justify-content: space-between;
`

export const SVG = styled.svg`
stroke: red;
`

