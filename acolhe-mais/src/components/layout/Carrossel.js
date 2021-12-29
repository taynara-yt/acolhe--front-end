//import { Link } from "react-router-dom"
import Container from "./Container"
import './Carrossel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//plataformas
import plat1 from "../imagens/plataformas/inTegracao-723x1024.jpeg"
import plat2 from "../imagens/plataformas/liga_nacional_de_atendimento_psicologico_social_online-768x768.jpg"
import plat3 from "../imagens/plataformas/suporte_psicologico_virtual_uninorte_ser.jpg"
const nome1 = "“inTEGRAÇÃO”: grupos reflexivos sobre trajetórias universitárias."
const nome2 = "Liga Nacional de Atendimento Psicológico Social Online"
const nome3 = "Suporte Psicológico Virtual Uninorte"

function Carrossel() {
    return(
        <div>
        <div className="container my-4" id="plataformas">

          <hr className="my-3"/> {/* Separador de divs */ }
          <h1 className="text-center h2"> Plataformas disponíveis</h1>

          {/* Carousel Wrapper */}
          <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

            {/* Controls */}
            <div className="controls-top">
              <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i
                className="fa fa-chevron-left"></i></a>
              <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                className="fa fa-chevron-right"></i></a>
            </div>
            {/* /.Controls */}

            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
              <li data-target="#multi-item-example" data-slide-to="1"></li>
              <li data-target="#multi-item-example" data-slide-to="2"></li>
            </ol>
            {/* /.Indicators */}

            {/* Slides */}
            <div className="carousel-inner" role="listbox">
              {/* First slide */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top img-item" height="400"
                        src={plat1}
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">{nome1}</h4>
                        <p className="card-text text-justify">Grupos reflexivos sobre trajetórias universitárias. Informações Destinado a estudantes de graduação da Universidade Federal do Amazonas.</p>
                        <a className="btn btn-warning" href="https://docs.google.com/forms/d/e/1FAIpQLSfMOLDjVtN385b_kwXD4T-W41u54GqHXMUhvu4FzzY931vJPg/viewform" target="_blank">Ir para plataforma</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top img-item" height="400"
                        src={plat2}
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">{nome2}</h4>
                        <p className="card-text text-justify">Profissionais que se juntaram em um único sentimento de empatia para fornecer atendimento social psicoterápico online e em libras para quem estiver enfrentando demandas psicológicas por conta do COVID-19, quarentena e isolamento.</p>
                        <a className="btn btn-warning" href="https://www.facebook.com/capedceciliameireles/photos/a.2004170829808427/3135844923307673/" target="_blank">Ir para plataforma</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top img-item" height="400"
                        src={plat3}
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">{nome3}</h4>
                        <p className="card-text text-justify">O cadastro para atendimento é realizado por meio do formulário do Google disponível no link abaixo. Os atendimentos são realizados através do aplicativo Hangouts no modo de videoconferência, sendo importante o aplicativo instalado no seu celular.</p>
                        <a className="btn btn-warning" href="https://docs.google.com/forms/d/1e0dCEsef_AIVLRtmc0aJ1ph7dySaZwoWAZ2ROCqMdyM/viewform?edit_requested=true" target="_blank">Ir para plataforma</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.First slide */}

              {/* Second slide */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Nome da plataforma</h4>
                        <p className="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a className="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Nome da plataforma</h4>
                        <p className="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a className="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Nome da plataforma</h4>
                        <p className="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a className="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.Second slide */}

              {/* Third slide */}
              <div className="carousel-item">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Nome da plataforma</h4>
                        <p className="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a className="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Nome da plataforma</h4>
                        <p className="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a className="btn btn-primary">Ver mais</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                        alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Nome da plataforma</h4>
                        <p className="card-text text-justify">Aqui entra o resumo a respeito de uma determinada plataforma</p>
                        <a className="btn btn-primary">Ver mais</a>
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