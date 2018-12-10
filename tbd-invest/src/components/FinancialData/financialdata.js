import React, { Component } from "react";
import './Carousel.css';
import API from "../../utils/API";
import { Carousel } from "react-bootstrap";
import NewsCarousel from './NewsCarousel';


class FinancialData extends Component {
    state = {
        CurrentPrice: "",
        PreviousClose: "",
        DailyRange: "",
        DailyVolume: "",
        MarketCap: "",
        Beta: "",
        PE: "",
        EPS: "",
        Sector: "",
        DailyPercentChange: ""
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
                    description: res.data.articles[0].description
                }, {
                    img: res.data.articles[1].urlToImage,
                    title: res.data.articles[1].title,
                    description: res.data.articles[1].description
                }, {
                    img: res.data.articles[2].urlToImage,
                    title: res.data.articles[2].title,
                    description: res.data.articles[2].description
                }, {
                    img: res.data.articles[3].urlToImage,
                    title: res.data.articles[3].title,
                    description: res.data.articles[3].description
                }, {
                    img: res.data.articles[4].urlToImage,
                    title: res.data.articles[4].title,
                    description: res.data.articles[4].description
                }],
            });
        })
    }

    render() {
        return (
            <div className="wholeCarousel">
                {/* <pre>{JSON.stringify(this.state.articles["title"], null, 2)}</pre> */}
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={this.state.articles[0].img} />}
                        <Carousel.Caption>
                            <h3>{this.state.articles[0].title}</h3>
                            <p>{this.state.articles[0].description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[1].img} />}
                        <Carousel.Caption>
                        <h3>{this.state.articles[1].title}</h3>
                            <p>{this.state.articles[1].description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[2].img} />}
                        <Carousel.Caption>
                            <h3>{this.state.articles[2].title}</h3>
                            <p>{this.state.articles[2].description}.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[3].img} />}
                        <Carousel.Caption>
                            <h3>{this.state.articles[3].title}</h3>
                            <p>{this.state.articles[3].description}.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.articles[4].img} />}
                        <Carousel.Caption>
                            <h3>{this.state.articles[4].title}</h3>
                            <p>{this.state.articles[4].description}.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default FinancialData;








