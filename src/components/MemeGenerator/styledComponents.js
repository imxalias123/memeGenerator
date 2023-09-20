// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  font-family: 'roboto';
  padding: 20px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 30px;
`
export const Input = styled.input`
  border: 1px solid #7e858e;
  height: 40px;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 10px;
`
export const Select = styled.select`
  border: 1px solid #7e858e;
  height: 40px;
`
export const Option = styled.option`
  color: #000;
`

export const Button = styled.button`
  color: #fff;
  background-color: #0b69ff;
  border-radius: 8px;
  height: 40px;
  width: 150px;
  border: none;
  margin-top: 30px;
`
export const Output = styled.div`
  background-image: ${props => props.imgUrl};
  background-size: cover;
  width: 100vh;
  height: 90vh;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Para = styled.p`
  color: #fff;
  font-size: ${props => props.fontSize}px;
  margin: 70px;
`
