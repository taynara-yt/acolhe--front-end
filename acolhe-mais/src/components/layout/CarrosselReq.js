//import { Link } from "react-router-dom"
import Container from "./Container"
import './Carrossel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

//plataformas
import plat1 from "../imagens/plataformas/inTegracao-723x1024.jpeg"
const nome1 = "“inTEGRAÇÃO”: grupos reflexivos sobre trajetórias universitárias."
//Requisição API
const path = "localhost:5000/platform"


function Carrossel() {
    const [totalReactPackages, setTotalReactPackages] = useState(null);  
  
    useEffect(() => {
      fetch(path)
        .then(response => response.json())
        .then(data => setTotalReactPackages(data.total))
        
        console.log(totalReactPackages)
      
    }, []);


    return(
        <div>
        <div class="container my-4" id="plataformas">

          <hr class="my-3"/> {/* Separador de divs */ }
          <h1 class="text-center h2"> Plataformas disponíveis</h1>

          {/* Carousel Wrapper */}
          <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

            {/* Controls */}
            <div class="controls-top">
              <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i
                class="fa fa-chevron-left"></i></a>
              <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                class="fa fa-chevron-right"></i></a>
            </div>
            {/* /.Controls */}

            {/* Indicators */}
            <ol class="carousel-indicators">
              <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
              <li data-target="#multi-item-example" data-slide-to="1"></li>
              <li data-target="#multi-item-example" data-slide-to="2"></li>
            </ol>
            {/* /.Indicators */}

            {/* Slides */}
            <div class="carousel-inner" role="listbox">
              {/* First slide */}
              <div class="carousel-item active">
                <div class="">
                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top img-item" height="400"
                        src={plat1}
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">{}</h4>
                        <p class="card-text text-justify">Grupos reflexivos sobre trajetórias universitárias. Informações Destinado a estudantes de graduação da Universidade Federal do Amazonas.</p>
                        <a class="btn btn-warning" href="https://docs.google.com/forms/d/e/1FAIpQLSfMOLDjVtN385b_kwXD4T-W41u54GqHXMUhvu4FzzY931vJPg/viewform" target="_blank">Ir para plataforma</a>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
              {/* /.First slide */}
              
            </div>
            {/* /.Slides */}
          </div>
          {/* /.Carousel Wrapper */}
        </div>
      </div>
    )
}

export default Carrossel