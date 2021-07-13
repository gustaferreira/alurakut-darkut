import styled from 'styled-components';

const Box = styled.div`
  background-color: gray;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: black;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: black;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: black;
    border-bottom-color: black;
  }
  input {
    width: 100%;
    background-color: #333333;
    color: white;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: white;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: white;
    border-radius: 10000px;
    background-color: black;
  }
`; 

export default Box 