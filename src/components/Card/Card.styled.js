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
