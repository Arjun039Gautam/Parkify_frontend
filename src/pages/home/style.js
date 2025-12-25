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
    height: 180px;
    margin-bottom: 2rem;
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
    animation: fadeInUp 1s ease-in-out;
    animation-fill-mode: both;
  }

  .feature-card:nth-child(1) { animation-delay: 0.2s; }
  .feature-card:nth-child(2) { animation-delay: 0.4s; }
  .feature-card:nth-child(3) { animation-delay: 0.6s; }
  .feature-card:nth-child(4) { animation-delay: 0.8s; }

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
    animation: fadeInUp 1s ease-in-out;
    animation-fill-mode: both;
  }

  .step-card:nth-child(1) { animation-delay: 0.3s; }
  .step-card:nth-child(2) { animation-delay: 0.6s; }
  .step-card:nth-child(3) { animation-delay: 0.9s; }

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

  /* ---------- Developer Section ---------- */
  .developer-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #1a0f0a, #29170f);
    text-align: center;
    position: relative;
  }

  .developer-section h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
    background: linear-gradient(45deg, #d2b48c, #f5deb3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .developer-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(139, 69, 19, 0.3);
    border-radius: 20px;
    padding: 3rem;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }

  .developer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(139, 69, 19, 0.2);
  }

  .dev-image img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #d2b48c;
    box-shadow: 0 0 20px rgba(210, 180, 140, 0.3);
  }

  .dev-info {
    text-align: left;
  }

  .dev-info h3 {
    font-size: 2.5rem;
    color: #f5deb3;
    margin-bottom: 0.5rem;
  }

  .dev-role {
    color: #d2b48c;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .dev-bio {
    color: #e0c7a8;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-icon {
    color: #f5deb3;
    font-size: 1.8rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .social-icon:hover {
    background: #d2b48c;
    color: #1a0f0a;
    transform: translateY(-3px) rotate(360deg);
    box-shadow: 0 5px 15px rgba(210, 180, 140, 0.4);
  }

  /* ---------- Responsive Design ---------- */
  @media screen and (max-width: 768px) {
    .hero-section {
      padding: 1rem;
      text-align: center;
    }

    .logo {
      height: 120px;
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .hero-section h1 {
      font-size: 2.5rem;
      line-height: 1.2;
    }

    .hero-section p {
      font-size: 1.1rem;
      padding: 0 1rem;
    }

    .hero-buttons {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .hero-buttons .book-button,
    .hero-buttons .hero-link {
      width: 80%;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .features-section,
    .how-it-works-section,
    .tech-section {
      padding: 3rem 1rem;
    }

    .features-section h2,
    .how-it-works-section h2,
    .tech-section h2 {
      font-size: 2rem;
    }

    .feature-grid,
    .how-it-works-grid {
      grid-template-columns: 1fr;
    }

    .step-card {
      width: 100%;
    }

    .developer-card {
      flex-direction: column;
      text-align: center;
      padding: 2rem;
      gap: 2rem;
    }

    .dev-info {
      text-align: center;
    }

    .social-links {
      justify-content: center;
    }

    .dev-image img {
      width: 150px;
      height: 150px;
    }
  }
`;

export default Wrapper;
