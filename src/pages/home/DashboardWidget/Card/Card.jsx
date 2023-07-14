
import { FaBuildingUser, FaUser } from "react-icons/fa6";
import "./Card.css";
import MiniCard from "./MiniCard";

function Card({ typeEmployee, totalEmployees, nameCompany }) {

  return (
    <>
      <div className="card d-none d-md-block m-auto" style={{ width: "365px", height: "335px" }}>
        <div className={`card-body background-card-${typeEmployee == 'empleados' ? 'red' : 'blue'}  d-flex flex-column justify-content-between`} style={{ height: "236px" }}>
          <div className="header d-flex justify-content-between align-items-center">
            <span className="text-white">{typeEmployee}</span>
            <div className="dropdown">
              <button
                className="btn bg-secondary text-white bg-opacity-10 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exportar
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    PDF
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    XSL
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    JPG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="body d-flex justify-content-end">
            <div
              className="card d-flex align-items-center justify-content-center"
              style={{ width: "160px", height: "120px" }}
            >
              <div className="text-info text-center">
                <div>
                  {
                    typeEmployee == "empleados"
                      ? <FaBuildingUser size={32} />
                      : <FaUser size={32} />
                  }
                </div>
                <div>
                  <span>{typeEmployee} {nameCompany}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-secondary bg-opacity-25">
          <h1>{totalEmployees}</h1>
          <span>{typeEmployee} Registrados</span>
        </div>
      </div>
      <div className="d-md-none">
        <MiniCard  typeEmployee={typeEmployee} totalEmployees={totalEmployees} nameCompany={nameCompany} />
      </div>
    </>
  );
}

export default Card;