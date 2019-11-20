import React, {Component} from 'react';
class Home extends Component{
render(){
return(
<div className="slider">
    <div className="sliderimage">
        <div className="row  justify-content-center flex-row">
            <img className="rounded" src={require('../../gambar/desktop.jpg')} alt="Responsive image" />
        </div>
    </div>
    <div className="notive">
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-danger danger" role="alert">
                    <p className="text-white text-center">A simple success alert-check it out!</p>
                </div>
            </div>
        </div>
    </div>

    <div className="slide">
        <div className="row">
            <div className="col-md-9">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 tinggi" src={require('../../gambar/slide1.jpg')} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 tinggi" src={require('../../gambar/slide2.jpeg')} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 tinggi" src={require('../../gambar/slide3.jpg')} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <img className="img-fluid rounded slide" src={require('../../gambar/mini-banner-1-raw.png')}
                    alt="Responsive image" />
                <img className="img-fluid rounded slide" src={require('../../gambar/mini-banner-2-raw.png')}
                    alt="Responsive image" />
            </div>
        </div>
    </div>
</div>
)
}
}

export default Home;