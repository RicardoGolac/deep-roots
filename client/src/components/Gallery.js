import React, { Component } from "react";

let viewImage = (imageSrc) => {
    return <img src={imageSrc} />
}

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                "https://media.heifer.org/stockphoto-sheep.jpeg?or=0&q=60&crop=faces%2Centropy%2Ccenter&auto=format&fm=jpeg&shad=50&vib=20&duotone-alpha=40&duotone=000000%2C2CFFD4C6&fit=crop&w=367&h=245"
                , "http://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F8bc0ebbc-e918-11e9-b84b-ece3c04125d8.jpg?crop=3349%2C1884%2C117%2C454&resize=685"
                , "https://cdn.britannica.com/39/95439-050-78B87F34/Adult-sheep-lambs.jpg"
            ]
        }
    }
    render() { 
        return (
            <div>
                {this.state.pictures.map(function(picture) {
                    return viewImage(picture);
                })}
            </div>
        )
    }
}

export default Gallery;
