import React from "react";
import border from "../../img/border.png";
import "../../styles/index.css";
import "../../styles/blog.css";

export const Blog = () => {
	return (
		<div className="text-center container-fluid mt-3">
            <h1 className="diphylleia-regular blog-header"><strong>Plants in the News</strong></h1>
            <img className="divider m-auto" src={border}></img>
            <div className="d-flex flex-wrap justify-content-center mt-1">
                <div className="article">
                    <a target="_blank" href="https://www.treehugger.com/how-water-houseplants-correctly-4858755">
                        <img className="article-img" src="https://www.treehugger.com/thmb/TmxYrlPJs04hipYG9fjqBCFmRRg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/touchingplantleaveswhilewatering-6350438e816a421fb34f27d930d9e17a.jpg" />
                        <p className="diphylleia-regular article-text">
                            How to Water Houseplants
                        </p>
                    </a>
                </div>
                <div className="article">
                    <a target="_blank" href="https://www.npr.org/2024/05/06/1249310672/plant-intelligence-the-light-eaters-zoe-schlanger">
                        <img className="article-img" src="https://media.npr.org/assets/img/2024/05/06/gettyimages-1231726401-6a6b355a790037f8ec7a942520b86f6eb365ed7a.jpg?s=1100&c=85&f=webp" />
                        <p className="diphylleia-regular article-text">
                            Plants are Intelligent?!
                        </p>
                    </a>
                </div>
                <div className="article">
                    <a target="_blank" href="https://ted2sub.org/talks/suzanne_simard_how_trees_talk_to_each_other">
                        <img className="article-img" src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/8815e381-94e2-4223-9a6e-275dfc2a451c/SuzanneSimard_2016T-embed.jpg?quality=89&w=600" />
                        <p className="diphylleia-regular article-text">
                            Trees Talk to Each Other
                        </p>
                    </a>
                </div>
                <div className="article">
                    <a target="_blank" href="https://www.smithsonianmag.com/smart-news/worlds-worst-invasive-weed-sold-us-garden-centers-180978481/">
                        <img className="article-img" src="https://th-thumbnailer.cdn-si-edu.com/hRAkck36UvCB0HHYqpQvz3TTCtQ=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/7f/af/7faf3de4-f6bf-4423-a4e3-5b3e29eb117b/cogongrass-imperata-cylindrica-in-bloom-in-early.jpeg" />
                        <p className="diphylleia-regular article-text">
                            Beware Buying Invasives
                        </p>
                    </a>
                </div>
            </div>
        </div>
	);
};

