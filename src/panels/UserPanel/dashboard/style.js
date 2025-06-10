import parking_bg from './parking_bg.avif'
import styled from 'styled-components';

const Wrapper = styled.div`
 /* scroll-behavior: smooth;
 overflow: hidden;
  .dashboard-container {
    padding: 80px 20px;
  }

  .dashboard-heading {
    text-align: center;
    margin-bottom: 40px;
  }

  .section {
    padding: 80px 0;
    border-bottom: 1px solid #ddd;
    scroll-margin-top: 80px;
  }

  .section h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  } */
  background-color: #0b090a;
  width: 100%;
  margin-top: 90px;
  #userbooking{
  width: 100%;
  min-height: 100vh; /* Add height */
  background-image: linear-gradient(to bottom, rgba(36, 29, 23, 0) 60%, #241d17 100%), url(${parking_bg});
  background-repeat: no-repeat;
  background-size: cover;       
  background-position: center;
  overflow: hidden;
}
`;

export default Wrapper;
