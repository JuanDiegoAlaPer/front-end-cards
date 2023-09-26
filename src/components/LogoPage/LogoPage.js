import React, { useState } from "react";
import "./LogoPage.scss";
import Cubo from "../cubo/Cubo";
import Gato from "../../assets/images/gato5.jpg";
import Gato1 from "../../assets/images/gato6.jpg";
import Gato2 from "../../assets/images/gato7.webp";
import Gato3 from "../../assets/images/gato8.webp";
import Felino from "../../assets/images/felino2.jpg";
import Felino1 from "../../assets/images/felino1.jpg";
import Felino2 from "../../assets/images/felino4.jpg";
import Felino3 from "../../assets/images/felino3.jpg";

export const LogoPage = () => {
  const seccion1 = [Gato1, Gato2, Gato3];
  const seccion2 = [Felino1, Felino2, Felino3];
  const [mostrarImagenes1, setMostrarImagenes1] = useState(false);
  const [mostrarImagenes2, setMostrarImagenes2] = useState(false);

  const toggleImagenes1 = () => {
    setMostrarImagenes1(!mostrarImagenes1);
    setMostrarImagenes2(false); // Cierra mostrarImagenes2 al abrir mostrarImagenes1
  };

  const toggleImagenes2 = () => {
    setMostrarImagenes2(!mostrarImagenes2);
    setMostrarImagenes1(false); // Cierra mostrarImagenes1 al abrir mostrarImagenes2
  };

  return (
    <div>
      <Cubo></Cubo>

      <div className="content-logopage">
        <div className="general">
          <div className="main-options">
            <div
              className="seccion1-logopage"
              id="seccion1"
              onClick={toggleImagenes1}
            >
              <img src={Gato} alt="Gato" />
              <h2>Mini Felinos</h2>
              <h4>
                "Dios creó al gato para que el hombre pudiera acariciar al
                león."
              </h4>
              <h5>(Charles Baudelaire)</h5>
            </div>
            <div
              className="seccion2-logopage"
              id="seccion2"
              onClick={toggleImagenes2}
            >
              <img src={Felino} alt="Gato" />
              <h2>Super Felinos</h2>
              <h4>"Un león no se preocupa por la opinión de las ovejas."</h4>
              <h5>(Matshona Dhliwayo)</h5>
            </div>
          </div>
          <div className="sub-options">
            {mostrarImagenes1 && (
              <div className="seccion3-logopage">
                {seccion1.map((imagen, index) => (
                  <img key={index} src={imagen} alt={`Imagen ${index}`} />
                ))}
              </div>
            )}
            {mostrarImagenes2 && (
              <div className="seccion3-logopage">
                {seccion2.map((imagen, index) => (
                  <img key={index} src={imagen} alt={`Imagen ${index}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoPage;
