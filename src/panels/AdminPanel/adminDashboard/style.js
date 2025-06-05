import parking_bg from './parking_bg.avif'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 90px;
  #userslotview{
    margin-top: 90px;
  }
  #allbooking{
  width: 100%;
  height: 100vh; /* Add height */
  background-image: linear-gradient(to bottom, rgba(36, 29, 23, 0) 60%, #241d17 100%), url(${parking_bg});
  background-repeat: no-repeat;
  background-size: cover;       
  background-position: center;
  overflow: hidden;
}
`;

export default Wrapper;
