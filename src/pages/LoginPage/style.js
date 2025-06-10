import styled from "styled-components";

const Wrapper = styled.div`
background-color: #0d0d0d;
  .body{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    background-color: #0d0d0d;
    width: 100vw;
  }
 .container {
    position: relative;
}

.box {
    position: relative;
    height: 45vh;
    width: 45vw;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
}
@media screen and (max-width: 600px){
  .box {
    position: relative;
    width: 70vw;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
}
}
h2 {
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

.form-content {
    /* opacity: 0;
    height: 0; */
    overflow: hidden;
    transition: opacity 2s ease-in-out, height 5s ease-in-out;
}
/* 
.box:hover .form-content {
    opacity: 1;
    height: auto;
} */

.input-box {
    margin: 10px 0;
}

.input-box input {
    width: 100%;
    padding: 20px;
    border: 1px solid;
    border-radius: 25px;
    background: transparent;
    color: white;
    box-sizing: border-box;
    margin-bottom: 15px;
}

.btn {
    width: 100%;
    padding: 20px;
    border: 1px solid;
    border-radius: 25px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 15px;
}
.btn:hover{
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.links {
    margin-top: 40px;
}

.links a {
    color: #007bff;
    font-size: 16px;
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}
.guest-button {
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 15px;
}
.guest-button:hover {
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 15px;
  text-decoration: underline;
}
header{
  width: 100vw;
  display: flex;
  background-color: #0d0d0d;
  top: 0;
  height: 50vh;
  justify-content: center;
  img{
    height: 100%;
    /* width: 100%; */
  }
}
@media screen and (max-width: 600px){
  header{
  width: 100vw;
  display: flex;
  background-color: #0d0d0d;
  top: 0;
  height: 50vh;
  justify-content: center;
  img{
    height: 100%;
    width: 100%;
  }
}
}
`
export default Wrapper