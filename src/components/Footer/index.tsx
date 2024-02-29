import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-context">
        <label>Hasan Atahan</label>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/hasan-atahan-a655ba10b/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/atahandevelopment/secil-case"
            target="_blank"
          >
            Github Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
