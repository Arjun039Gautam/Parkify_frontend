import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% { box-shadow: 0 0 5px #d4af37; }
  50% { box-shadow: 0 0 15px #d4af37; }
  100% { box-shadow: 0 0 5px #d4af37; }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #8b5e3c, #c19a6b);
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 120px;
  justify-content: center;
  gap: 8px;

  span {
    font-weight: 500;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  .logout-btn {
    color: white;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 20px rgba(196, 154, 107, 0.6);
  }

  &:hover .logout-btn {
    animation: ${glow} 1.5s infinite ease-in-out;
    color: #ffeb7f;
  }
`;
export default Wrapper;
