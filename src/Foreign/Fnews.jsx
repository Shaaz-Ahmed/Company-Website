import React from "react";
import foreign from "../../src/images/foreign1.png"; // Use any image path
import FnewsItem from "./FnewsItem"; // Import NewsItem component

const Fnews = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      image: foreign,
      title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
      date: "13 January",
      link: "/news-detail",
    },
    {
      id: 2,
      image: foreign,
      title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
      date: "14 January",
      link: "/news-detail",
    },
    {
      id: 3,
      image: foreign,
      title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
      date: "15 January",
      link: "/news-detail",
    },
    {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },
      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },

      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },

      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },


      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },

      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },
      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },
      {
        id: 3,
        image: foreign,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },
    // Add more items as needed
  ];

  return (
    <div
      style={{
        display: 'flex', // Use flexbox to align the items horizontally
        flexWrap: 'wrap', // Allow the items to wrap to the next line if necessary
        justifyContent: 'space-around', // Space between items
        gap: '20px', // Space between each news item
        padding: '20px', // Add some padding around the container
      }}
    >
      {newsData.map((newsItem) => (
        <FnewsItem
          key={newsItem.id}
          image={newsItem.image}
          title={newsItem.title}
          date={newsItem.date}
          link={newsItem.link}
        />
      ))}
    </div>
  );
};

export default Fnews;
