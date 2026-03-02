let IS_PROD = true;

const server = IS_PROD
  ? "https://videocallbackend-pbyp.onrender.com"
  : "http://localhost:8080";

export default server;
