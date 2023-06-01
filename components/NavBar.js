import Link from "next/link";

const NavBar = () => {
  const cartCount =
    typeof window !== "undefined" && localStorage.getItem("cartCount");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0">
            <img
              style={{ marginLeft: "30px", width: "70px", height: "60px" }}
              src="https://seeklogo.com/images/S/shopping-e-commerce-business-logo-A0E86A878B-seeklogo.com.png"
              alt="Logo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={{ fontWeight: "bold", fontSize: 20 }}
                className="nav-link"
                href="/"
              >
                Product
              </Link>
            </li>
          </ul>
        </div>

        <div lassName="d-flex align-items-center">
          <Link href="/cart">
            <i
              style={{ fontSize: "30px", marginRight: "30px", color: "black" }}
              className="bi bi-cart-fill"
            >
              {cartCount}
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
