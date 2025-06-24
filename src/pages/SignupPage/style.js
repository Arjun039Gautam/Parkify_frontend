import styled from "styled-components";

const Wrapper = styled.div`
background-color: #0d0d0d;
  .body{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    background-color: #0d0d0d;
    width: 100vw;
  }
 .container {
    position: relative;
}

.box {
    position: relative;
    height: 60vh;
    width: 45vw;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    margin: auto;
}
@media screen and (max-width: 600px){
  .box {
    position: relative;
    height: 110vw;
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
    overflow: hidden;
    transition: opacity 2s ease-in-out, height 5s ease-in-out;
} 

.input-box {
    margin: 10px 0;
}

.input-box input {
    width: 90%;
    padding: 20px;
    border: 1px solid;
    border-radius: 25px;
    background: transparent;
    color: white;
    box-sizing: border-box;
    margin-bottom: 15px;
}

.btn {
    width: 90%;
    padding: 20px;
    border-radius: 25px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 15px;
    background: linear-gradient(to right, #241d17,rgb(104, 82, 67));
}
.btn:hover{
  background: linear-gradient(to right,rgb(26, 21, 16),rgb(76, 53, 37));
  color: #fff;
  /* border: 1px solid #fff; */
}
.btn:active{
  background: linear-gradient(to right,rgb(26, 21, 16),rgb(76, 53, 37));
  color: #fff;
}

.links {
    margin-top: 40px;
    color: #007bff;
    font-size: 16px;
}

.links p,a {
    color: #007bff;
    font-size: 18px;
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

.verify-box{
  position: relative;
    height: 40vh;
    width: 45vw;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    padding-top: 50px;
    color:rgb(163, 159, 159);
    margin: auto;
}

.verify-box h2 {
  margin-bottom: 10px;
}

.verify-box p {
  font-size: 14px;
  margin-bottom: 25px;
}

.code-inputs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.code-inputs input {
  width: 45px;
  height: 55px;
  font-size: 22px;
  text-align: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background-color: #f0f4ff;
  outline: none;
  transition: 0.2s ease;
}

.code-inputs input:focus {
  background-color: #fff;
  border: 2px solid #8e44ad;
}

.verify-btn {
  width: 90%;
  background: linear-gradient(to right, #241d17,rgb(104, 82, 67));
  color: #fff;
  font-size: 16px;
  padding: 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.verify-btn:hover {
  background: linear-gradient(to right,rgb(26, 21, 16),rgb(76, 53, 37));
}
.verify-btn:active {
  background: linear-gradient(to right,rgb(26, 21, 16),rgb(76, 53, 37));
}
.resend-text {
  margin-top: 20px;
  font-size: 13px;
  color: rgb(163, 159, 159);
}

.resend-link {
  color:blue;
  cursor: pointer;
}

@media screen and (max-width: 600px){
  .verify-box{
  position: relative;
    height: 40vh;
    width: 70vw;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    padding-top: 50px;
    color:rgb(163, 159, 159);
}

.verify-box h2 {
  margin-bottom: 10px;
}

.verify-box p {
  font-size: 14px;
  margin-bottom: 25px;
}

.code-inputs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.code-inputs input {
  width: 45px;
  height: 55px;
  font-size: 22px;
  text-align: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background-color: #f0f4ff;
  outline: none;
  transition: 0.2s ease;
}

.code-inputs input:focus {
  background-color: #fff;
  border: 2px solid #8e44ad;
}

.verify-btn {
  width: 100%;
  background: linear-gradient(to right, #241d17,rgb(104, 82, 67));
  color: #fff;
  font-size: 16px;
  padding: 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.verify-btn:hover {
  background: linear-gradient(to right,rgb(26, 21, 16),rgb(76, 53, 37));
}

.resend-text {
  margin-top: 20px;
  font-size: 13px;
  color: rgb(163, 159, 159);
}

.resend-link {
  color:blue;
  cursor: pointer;
}
}


.flip-container {
  perspective: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flip-box {
  width: 45vw;
  height: 65vh;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-front,
.flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-front {
  z-index: 2;
}

.flip-back {
  transform: rotateY(180deg);
  z-index: 1;
}
@media (max-width: 768px) {
  .flip-box {
    width: 90vw;
    height: 70vh;
  }
}
`
export default Wrapper