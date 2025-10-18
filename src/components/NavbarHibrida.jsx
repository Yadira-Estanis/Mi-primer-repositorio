export default function NavbarHibrida() {
  return (
    <nav className="navbar navbar-expand-lg hover:tw-bg-blue-100">
      <div className="container-fluid tw-flex tw-items-center">
        <a className="navbar-brand tw-text-xl hover:tw-text-blue-600" href="#">
          MiApp
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navHybrid"
          aria-controls="navHybrid"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navHybrid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item hover:tw-bg-gray-100 tw-rounded-lg">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item hover:tw-bg-gray-100 tw-rounded-lg">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item hover:tw-bg-gray-100 tw-rounded-lg">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
