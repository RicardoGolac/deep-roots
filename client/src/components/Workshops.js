import React, { Component } from "react";
import "./../css/Workshops.css";
import axios from "axios";

class Workshops extends Component {

    constructor(props){
        super(props);

        // this.onChangeName = this.onChangeName.bind(this);
        // this.onChangeMessage = this.onChangeMessage.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.deleteHome = this.deleteHome.bind(this);

        this.state = {
            id: "",
            contents: "",
            workshopsArray: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Workshops/")
            .then(res => {
                const data = res.data;
                this.setState({workshopsArray: data});
            }).catch(err => {
                console.log(err);
            });
        console.log(this.state.workshopsArray);
    }

    render() {
        return (
            <div class="workshops-container container-fluid text-center">
                <div class="container">
                    <div class="row text-center">
                        <div class="col text-center">
                            <h4>Philosophy</h4>
                            <p>
                                We are all creative beings with the capacity to utilize our talents in any direction we choose.
                                Through my educational techniques using cross-lateral integration, engaging the left and right brain, understanding range of motion, as well as mind and muscle memory, my students are able to explore their abilities in a safe, nonjudgmental environment.
                                The statement, “I can’t draw” or “I have no talent” become a thing of the past.
                                Using the Marabou Method, most art students quickly see improvements in their artistic skills and the possibility of reaching their maximum creative potential.
                            </p>
                        </div>
                        {/* <div class="col-sm-6 text-center"> */}
                        {/* Here we will have an embed with square to pay for workshops */}
                        {/* </div> */}
                    </div>
                    {/* <div class="row text-center">
                        <div class="col text-center">
                            <h4>Paint Party Sip and create</h4>
                            <p>
                            Make your party a unique theme by making it a paint party!
                            Pick a subject that you can make your own and we will guide to a master piece you can be proud of while listening to cool musical vibe.
                            </p>
                        </div>
                        <div class="col text-center">
                            <h4>Awakening your inner creativity</h4>
                            <p>
                            This all day workshop will introduce you the realities of how your creativity works and be fostered as a creative.
                            Providing tools and methods that teach you how to understand how creativity is in us all.
                            </p>
                        </div>
                    </div> */}
                    <div class="row text-center">
                        <div class="col text-center">
                            <h3>Visual Arts workshops</h3>
                            <p>
                            These visual arts workshops are offered as an introduction to the medium and to provide an understanding of the basic techniques and use of materials process so you can do it in the comfort of you own home or studio mediums.
                            Workshops can be extended to 1 on one classes in the convenience of your own home or studio.
                            </p>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col text-center">
                            <h4>Printmaking workshop</h4>
                            <p>
                            offering a basic introduction to woodblock techniques to produce artwork on paper and textile surfaces 
                            </p>
                        </div>
                        <div class="col text-center">
                            <h4>Collage Workshop</h4>
                            <p>
                            A great way to approach your creativity from a fresh perspective.
                            Learn composition and color approaches through this fun medium.
                            </p>
                        </div>
                        <div class="col text-center">
                            <h4>Basic drawing workshop</h4>
                            <p>
                            Introducing range of motion and cross lateral techniques to remove the illusion that drawing is a skill for the chosen few.
                            Through the marabou methods you will be able to learn the correct approach to engaging the elements of art.
                            </p>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col text-center">
                            <h3>Performance Workshops</h3>
                            <p>
                            Stories and folklore draw from wells full of rich cultural heritage and social values.
                            Our Ancestors teach us that the beauty of life is working in tandem with the grand plan of creation.
                            The courage of a storyteller is being able to capture these aspects in their stories and narratives in order to retain that which is meaningful to us as human beings, thus I contend Art is For Life’s Sake.
                            </p>
                            <p>
                            These workshops are designed to give you orator skills to awaken your inner griot.
                            To speak your narrative, weave a tale or recall a  as if it was yesterday.
                            Create the pitch that will bring them tears and seal the business deal you have  heard in legend.
                            </p>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col text-center">
                            <h4>Stories from the rabbit hole</h4>
                            <p>
                            Let us gather as our ancestors did.
                            To hear tales rich culture, folklore and knowledge to use in our daily lives.
                            </p>
                        </div>
                        <div class="col text-center">
                            <h4>Awaken your inner griot</h4>
                            <p>
                            Learn to speak your narrative, change your narrative to empower yourself and let the world know how powerful you are.
                            </p>
                        </div>
                        <div class="col text-center">
                            <h4>The power of the drum</h4>
                            <p>
                            Through the healing and transformative power of the drum learn to work in harmony with others in your family in your work place but most importantly hear the pulse in you.
                            </p>
                        </div>
                    </div>
                    
                        <div class="row text-center">
                            <div class="col text-center">
                                <h3>Other Workshops</h3>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col text-center">
                                <h4>Paint Party Sip and create</h4>
                                <p>
                                Make your party a unique theme by making it a paint party!
                                Pick a subject that you can make your own and we will guide to a master piece you can be proud of while listening to cool musical vibe.
                                </p>
                            </div>
                            <div class="col text-center">
                                <h4>Awakening your inner creativity</h4>
                                <p>
                                This all day workshop will introduce you the realities of how your creativity works and be fostered as a creative.
                                Providing tools and methods that teach you how to understand how creativity is in us all.
                                </p>
                            </div>
                        </div>
                        <div class="row text-center">
                        <div class="col-sm-3 text-center">
                            <img className="image" src={require("./photos/DlPM9DZVAAAecZm.jpeg")} alt="Errornot found"></img>
                        </div>
                        <div class="col-sm-6 text-center">
                            <iframe id="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cmJydG9wbnRqYUBnbWFpbC5jb20&amp;color=%233366CC&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0" frameborder="0" scrolling="no">
                            </iframe>                    
                        </div>
                        <div class="col-sm-3 text-center">
                            <img className="image" src={require("./photos/DlPLxbtVsAEfyUh.jpeg")} alt="Error: not found"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Workshops;
