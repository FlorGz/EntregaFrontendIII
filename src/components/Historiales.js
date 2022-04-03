import React from "react";

class Historiales extends React.Component {
    render() {
        return(
            <div className="historial">
                <h3>Última selección: {this.props.seleccionAnterior}</h3>
                <h4>Historial de elecciones: </h4>
                <ul>{this.props.historial}</ul>
            </div>
        )
    }
}
export default Historiales;