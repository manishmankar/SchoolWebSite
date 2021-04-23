import React, { Component } from "react";
import GallaryImgCard from "../../Components/GallaryImgCard/GallaryImgCard";
import "./Gallary.css";

const images = [
  {
    id: 1,
    img:
      "https://scontent-xsp1-3.cdninstagram.com/v/t51.2885-15/176566561_877931646271405_2087415259426885127_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=joQlUwpGlRkAX_zghSB&_nc_ht=scontent-xsp1-3.cdninstagram.com&oh=57c07efb7930719d055dc4a276a40997&oe=60A84E9D",
    contain:
      " Worship Lord Rama for the path he trod, the ideal he left aloft. Happy Ram Navami.",
  },
  {
    id: 2,
    img:
      "https://scontent-xsp1-1.cdninstagram.com/v/t51.29350-15/174246265_135598445200277_7726418020297477141_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=UeV1xHS29fIAX8dHbZD&_nc_ht=scontent-xsp1-1.cdninstagram.com&oh=95418ba86c5e62639ac87bcd90a1e5f9&oe=60A94326",
    contain:
      "Let's help in preserving the monuments to memorize history and getting inspired by them.",
  },
  {
    id: 3,
    img:
      "https://scontent-xsp1-3.cdninstagram.com/v/t51.29350-15/173580489_724411798225143_4260049453814733590_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=nFavg5ZWtIwAX-OsPZp&_nc_ht=scontent-xsp1-3.cdninstagram.com&oh=df7f6a87ff37f854f5c9d8839a02421d&oe=60A61144",
    contain:
      "We have the best care for our shield like protection, Wear mask and help one another to stay safe and healthy.",
  },
  {
    id: 4,
    img:
      "https://scontent-xsp1-1.cdninstagram.com/v/t51.29350-15/173026011_488354298971712_649652986802225977_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Xv6ASFblDpQAX-vxzlq&_nc_ht=scontent-xsp1-1.cdninstagram.com&oh=d4cf4472f66da8421d61aeb19e3d6634&oe=60A7C1BA",
    contain:
      "If you believe in living a respectable life, you believe in self-help which is the best help”. — Dr B R Ambedkar",
  },
  {
    id: 5,
    img:
      "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/171698431_840096163587274_628997370880216832_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=h2jrLP888XcAX9nEDte&_nc_ht=scontent-xsp1-1.cdninstagram.com&oh=98c4914bcd09e01786b7629308df181e&oe=60A8F07A",
    contain:
      "May this festival bring prosperity and joy with the bloom…Happy Baisakhi ",
  },
  {
    id: 6,
    img:
      "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/172060671_460922931818687_2259941516265306603_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=lqQQhJlXIqYAX9kmRkJ&_nc_ht=scontent-xsp1-1.cdninstagram.com&oh=de76bb0f642d12a439c0a3ec6bcd295f&oe=60A98FA2",
    contain:
      "Let the auspicious day of Gudi Padwa spread the message of peace & happiness.",
  },
  {
    id: 7,
    img:
      "https://scontent-xsp1-3.cdninstagram.com/v/t51.2885-15/169639549_291959739109955_3876912496831449803_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=7T9FoPgJALAAX_BTWoY&_nc_ht=scontent-xsp1-3.cdninstagram.com&oh=da7c71dc0f62ca4c20361dbd06b9fe5b&oe=60A84ADD",
    contain:
      "We understand that every child is unique and hence we encourage students to identify and explore their talent, dreams and uniqueness. ",
  },
  {
    id: 8,
    img:
      "https://scontent-xsp1-3.cdninstagram.com/v/t51.2885-15/169122383_2848494092079945_7028310610723574987_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=93VO-2h7zqkAX8yvehT&_nc_ht=scontent-xsp1-3.cdninstagram.com&oh=5f854e6d6dc8b95c441b32f62ed96355&oe=60A66633",
    contain:
      "At Imperial School of Excellence, we shape young minds with unbridled freedom to express and excel their creativity",
  },
];
export default class Gallary extends Component {
  render() {
    return (
      <div className="gallary">
        <div className="gallaryHedding">
          <div>Gallery</div>
          <div>Home/Gallery</div>
        </div>
        <div className="gallaryContainer">
          <div className="gallaryContainerHedding">Follow us on Instagram</div>
          <GallaryImgCard data={images} />
        </div>
      </div>
    );
  }
}
