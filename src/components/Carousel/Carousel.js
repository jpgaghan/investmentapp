import React, { Component } from "react";
import "./Carousel.css";
import API from "../../utils/API";
import { Carousel } from "react-bootstrap";
import Indicies from "../Indicies/Indicies";



class NewsCarousel extends Component {
    state = {
        results: [],
        articles: [{
            img: '',
            title: '',
            description: '',
            url: ''
        }, {
            img: '',
            title: '',
            description: '',
            url: ''
        }, {
            img: '',
            title: '',
            description: '',
            url: ''
        }, {
            img: '',
            title: '',
            description: '',
            url: ''
        }, {
            img: '',
            title: '',
            description: '',
            url: ''
        }],
    };
    componentDidMount() {
        this.getNews();
    }
    getNews = () => {
        API.carou()
        .then(res => {
            this.setState({
                results: res.data.articles,
                articles: [{
                    img: res.data.articles[0].urlToImage,
                    title: res.data.articles[0].title,
                    description: res.data.articles[0].description,
                    url: res.data.articles[0].url
                }, {
                    img: res.data.articles[1].urlToImage,
                    title: res.data.articles[1].title,
                    description: res.data.articles[1].description,
                    url: res.data.articles[1].url
                }, {
                    img: res.data.articles[2].urlToImage,
                    title: res.data.articles[2].title,
                    description: res.data.articles[2].description,
                    url: res.data.articles[2].url
                }, {
                    img: res.data.articles[3].urlToImage,
                    title: res.data.articles[3].title,
                    description: res.data.articles[3].description,
                    url: res.data.articles[3].url
                }, {
                    img: res.data.articles[4].urlToImage,
                    title: res.data.articles[4].title,
                    description: res.data.articles[4].descriptio,
                    url: res.data.articles[4].urln
                }],
            });
        })
    }

    render() {
        return (
            <div className="wholeCarousel">
            
                <Carousel>
                    <Carousel.Item>

                        <img width={900} height={500} alt="900x500" src={this.state.articles[0].img} />

                        <Carousel.Caption>
                            <a target="_blank" href={this.state.articles[0].url}>
                            <h3>{this.state.articles[0].title}</h3>
                            <p>{this.state.articles[0].description}</p>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[1].img} />

                        <Carousel.Caption>
                        <a target="_blank" href={this.state.articles[1].url}>
                            <h3>{this.state.articles[1].title}</h3>
                            <p>{this.state.articles[1].description}</p>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[2].img} />
                        <Carousel.Caption>
                        <a target="_blank" href={this.state.articles[2].url}>
                            <h3>{this.state.articles[2].title}</h3>
                            <p>{this.state.articles[2].description}</p>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[3].img} />
                        <Carousel.Caption>
                        <a target="_blank" href={this.state.articles[3].url}>
                            <h3>{this.state.articles[3].title}</h3>
                            <p>{this.state.articles[3].description}</p>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[4].img} />
                        <Carousel.Caption>
                        <a target="_blank" href={this.state.articles[4].url}>
                            <h3>{this.state.articles[4].title}</h3>
                            <p>{this.state.articles[4].description}</p>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Indicies />
                
            </div>
  
        )
    }
}

export default NewsCarousel;








