import React, { Component } from "react";
import './Carousel.css';
import { Carousel } from "react-bootstrap";
import API from "../../utils/API";


class NewsCarousel extends Component {
    state = {
        results: [],
        articles: [{
            img: '',
            // title: '',
        }, {
            img: '',
        }, {
            img: ''
        }],
    };
    componentDidMount() {
        this.getNews();
    }
    getNews = () => {
        API.carou()
        .then(res => {
            console.log(res.data.articles);
            this.setState({
                results: res.data.articles,
                articles: [{
                    img: res.data.articles[0].urlToImage,
                }, {
                    img: res.data.articles[1].urlToImage,
                }, {
                    img: res.data.articles[2].urlToImage,
                }],
            });
        })
    }

    render() {
        return (

            <div className="wholeCarousel">
                <pre>{JSON.stringify(this.state.articles["title"], null, 2)}</pre>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={this.state.articles[0].img} />}
                        <Carousel.Caption>
                            {/* <h3>{this.state.results[0].title}</h3> */}
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[1].img} />}
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[2].img} />}
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default NewsCarousel;








