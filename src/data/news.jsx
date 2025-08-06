import newsLaptop from "../assets/image/news/news_laptop.jpg";
import newsGirl from "../assets/image/news/news_girl.jpg";
import newsSilhouette from "../assets/image/news/news_silhouette.jpg";
import newsCat from "../assets/image/news/news_cat.jpg";

export const news = [
    {
        id: 1,
        image: {
            src: newsLaptop,
            alt: "laptop"
        },
        title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        category: "NEWS",
        isMain: true,
        isHomePage: true
    },
    {
        id: 2,
        image: {
            src: newsGirl,
            alt: "girl with tablet"
        },
        title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
        desc: "Class Technologies Inc., the company that created Class,...",
        category: "PRESS RELEASE",
        isMain: false,
        isHomePage: true
    },
    {
        id: 3,
        image: {
            src: newsSilhouette,
            alt: "person with laptop"
        },
        title: "Zoom`s earliest investors are betting millions on a better Zoom for schools",
        desc: "Zoom was never created to be a consumer product. Nonetheless, the...",
        category: "NEWS",
        isMain: false,
        isHomePage: true
    },
    {
        id: 4,
        image: {
            src: newsCat,
            alt: "cat behind the laptop"
        },
        title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
        desc: "This year, investors have reaped big financial returns from betting on Zoom...",
        category: "NEWS",
        isMain: false,
        isHomePage: true
    }
]