import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-top: 12px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (min-width: 1280px) {
  column-gap: 80px;
  }

`;

// export const ModalContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 16px;
// `;


// export const BlockAcc = styled.div`
//   padding-top: 48px;
//   display: flex;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
// `;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
position: absolute;
top: 100%;
left: 0;
display: flex;
flex-direction: column-reverse;
justify-content: flex-end;
padding: 46px 0 190px;
width: 100%;
overflow: hidden;
background-color: #FDF7F2;
row-gap: 60px;
align-items: center;
z-index: 20;

@media screen and (max-width: 767px) {
transform: scaleY(0);
opacity: 0;
height: 100vh;

transform-origin: top;
transition: transform 250ms linear, opacity 250ms linear;

&.shown {
transform: scaleY(1);
opacity: 1;
}
}

@media screen and (min-width: 768px) {
padding: 0;
position: relative;
overflow: visible;
height: auto;
}

@media screen and (min-width: 1280px) {
position: relative;
flex-direction: row;
justify-content: flex-start;
padding: 20px 0;
height: auto;
}
`

export const AuthUserContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 250px;

@media screen and (min-width: 768px) {
  position: absolute;
  top: 0;
  right: 25px;
  transform: translateY(-50%);
  justify-content: center;
}

@media screen and (min-width: 1280px) {
  position: relative;
  display: flex;
  column-gap: 20px;

  top: 0;
  right: 0;
  margin-left: auto;
  transform: translate(0);
}
`
