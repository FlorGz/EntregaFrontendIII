import data from "./data.json";
import React from "react";
import Opciones from "./Opciones";
import Historiales from "./Historiales";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            historial: [],
            contador: 0,
            seleccionAnterior: "",
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
            this.state.historial.push(this.state.seleccionAnterior);
        }
    }

    handleClick = (e) => {
        const id = e.target.id;
        if (this.state.contador >= 7) {
            alert("Colorin colorado, esta historia se ha terminado.");
        } else if (id === "A" && this.state.seleccionAnterior !== "A") {
            this.setState({
                contador: this.state.contador + 1,
                seleccionAnterior: "A",
            });
        } else if (id === "A" && this.state.seleccionAnterior === "A") {
            this.setState({
                contador: this.state.contador + 2,
            })
        } else if (id === "B" && this.state.seleccionAnterior === "A") {
            this.setState({
                contador: this.state.contador + 3,
                seleccionAnterior: "B",
            })
        } else if (id === "B") {
            this.setState({
                contador: this.state.contador + 2,
                seleccionAnterior: "B"
            })
        }
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    handleClick={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Historiales
                    seleccionAnterior={this.state.seleccionAnterior}
                    historial={this.state.historial.map(
                        (e, index) => (
                            <li key={index}>{e}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </div>
        );
    };
}

export default Main;