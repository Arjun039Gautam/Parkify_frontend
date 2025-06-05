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

    @media (max-width: 600px) {
  .table-container {
    max-width: 95vw;
  }

  table {
    min-width: unset;
    width: max-content;
  }

  th, td {
    padding: 8px 10px;
    font-size: 14px;
    white-space: nowrap; /* Prevents text wrapping */
  }
}
.search-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.search-input {
  padding: 0.6rem 1.2rem;
  width: 90%;
  max-width: 500px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #1e1e1e;      /* Dark background for input */
  color: #f0f0f0;                 /* Light text */
  transition: 0.3s ease all;
}

.search-input::placeholder {
  color: #999;
}

.search-input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  background-color: #2a2a2a;
}
@media (max-width: 480px) {
  .search-container {
    width: 80%;
    margin: 20px auto;
}
  .search-input {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}

`;

export default Wrapper;
