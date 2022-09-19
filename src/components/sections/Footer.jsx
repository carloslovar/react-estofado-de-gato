const Footer = ({ credits }) => {
    const { year, author } = credits;
    return (
      <footer className="mt-auto py-3 animate__animated animate__fadeIn">
        <div className="container">
          <h2 className="text-light text-center fs-6 m-0">𓃠 𓃠Copyright &copy; {year} {author}. Todos los derechos reservados.𓃠 𓃠</h2>
        </div>
      </footer>
    );
  };
  
  export default Footer;