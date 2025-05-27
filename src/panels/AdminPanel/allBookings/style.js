import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #fff;
  height: 83vh;

    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #fff;
    }

    .table-container {
      backdrop-filter: blur(10px);
      max-width: 80vw;
      margin: 0 auto;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
      overflow-x: auto;
      max-height: 70vh;      /* Set a max height */
      overflow-y: auto;       /* Enable vertical scroll */
      
    }


    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;
    }

    thead {
      background-color: #2f2620;
      color: #B3B3B3;
    }

    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    tbody tr:hover {
      background-color: #241d17;
    }

    @media (max-width: 600px) {
      th, td {
        padding: 8px 10px;
      }
    }
`;

export default Wrapper;
