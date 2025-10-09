import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(135deg, #1a0f0a, #2b1b12, #3c241a);
  color: #fff;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;

  /* ---------- Hero Section ---------- */
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(
        rgba(20, 10, 5, 0.8),
        rgba(30, 15, 10, 0.8)
      ),
      url("https://images.unsplash.com/photo-1529429611270-3e6d421d6c9b")
        no-repeat center center/cover;
    background-attachment: fixed;
    animation: fadeIn 2s ease-in-out;
  }

  .logo {
    height: 220px;
    margin-top: -100px;
    animation: float 4s ease-in-out infinite;
  }

  .hero-section h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #f5deb3;
    animation: fadeInDown 1.5s ease-in-out;
  }

  .hero-section p {
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    color: #e0c7a8;
    max-width: 700px;
    animation: fadeInUp 2s ease-in-out;
    text-align: center;
    margin: auto;
  }

  .hero-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-buttons .book-button,
  .hero-buttons .hero-link {
    background: linear-gradient(45deg, #8b4513, #d2b48c);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.4s ease;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
  }

  .hero-buttons .book-button {
    animation: pulse 2s infinite;
  }

  .hero-buttons .hero-link {
    background: transparent;
    border: 2px solid #d2b48c;
    color: #f5deb3;
  }

  .hero-buttons .hero-link:hover {
    background: #8b4513;
    color: #fff;
    transform: translateY(-3px);
  }

  /* ---------- Animations ---------- */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(210, 180, 140, 0.7);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(210, 180, 140, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(210, 180, 140, 0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* ---------- Features Section ---------- */
  .features-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #2e1b0f, #3b2417);
  }

  .features-section h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #d2b48c, #f5deb3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(139, 69, 19, 0.3);
    padding: 2.5rem;
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(210, 180, 140, 0.2);
  }

  .feature-card h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #f5deb3;
  }

  .feature-card p {
    color: #e0c7a8;
  }

  /* ---------- How It Works ---------- */
  .how-it-works-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #1a0f0a, #29170f);
    text-align: center;
  }

  .how-it-works-section h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #d2b48c, #f5deb3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .how-it-works-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    flex-wrap: wrap;
  }

  .step-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(139, 69, 19, 0.3);
    padding: 2rem;
    border-radius: 15px;
    width: 250px;
    transition: transform 0.4s ease, box-shadow 0.3s ease;
  }

  .step-card:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(210, 180, 140, 0.2);
  }

  .step-card span {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(45deg, #d2b48c, #f5deb3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .step-card h3 {
    margin-top: 1rem;
    color: #f5deb3;
  }

  .step-card p {
    color: #e0c7a8;
  }

  /* ---------- Technology Section ---------- */
  .tech-section {
    padding: 5rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, #2b1b12, #1a0f0a);
  }

  .tech-section h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #d2b48c, #f5deb3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tech-section p {
    color: #e0c7a8;
    font-size: 1.2rem;
  }

  .tech-logos {
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 3rem 2rem;
    flex-wrap: wrap;
  }

  .tech-logos svg {
    filter: drop-shadow(0 0 10px #d2b48c);
    transition: all 0.4s ease;
  }

  .tech-logos svg:hover {
    filter: drop-shadow(0 0 25px #f5deb3);
    transform: scale(1.2) rotate(5deg);
  }
`;

export default Wrapper;
