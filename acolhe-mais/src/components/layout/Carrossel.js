import { Link } from "react-router-dom"
import Container from "./Container"
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
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
                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.First slide */}

              {/* Second slide */}
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.Second slide */}

              {/* Third slide */}
              <div class="carousel-item">

                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Nome da plataforma</h4>
                        <p class="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a class="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.Third slide */}
            </div>
            {/* /.Slides */}
          </div>
          {/* /.Carousel Wrapper */}
        </div>
      </div>
    )
}

export default Carrossel