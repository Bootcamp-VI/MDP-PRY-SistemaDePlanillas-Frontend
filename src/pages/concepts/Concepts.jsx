import FilterEmployee from "../../components/filter/FilterEmployee"
import TableConcepts from "./components/TableConcepts"

function Concepts() {
    return (
        <div className="container-fluid border rounded container-lg my-2">
            <FilterEmployee title={"Conceptos por Empleado"} EmployeeName={"Emerson Medina"}></FilterEmployee>
            <TableConcepts />
        </div>
    )
}

export default Concepts