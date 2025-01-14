import React from "react";
import games from "../../src/images/games.png"; // Use any image path
// import GnewsItem from "../../src/Game/GnewsItem";
import TnewsItem from "../../src/Technology/TnewsItem";
const Tnews = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      image: games,
      title: "हाल ही में ब्रिटेन के कुछ सांसदों ने इंग्लैंड क्रिकेट बोर्ड से अपील की है कि वो आगामी फ़रवरी में चैंपियंस ट्रॉफ़ी में अफ़ग़ानिस्तान के ख़िलाफ़ मैच का बहिष्कार करें.",
      date: "13 January",
      link: "/news-detail",
    },
    {
      id: 2,
      image: games,
      title: "हाल ही में ब्रिटेन के कुछ सांसदों ने इंग्लैंड क्रिकेट बोर्ड से अपील की है कि वो आगामी फ़रवरी में चैंपियंस ट्रॉफ़ी में अफ़ग़ानिस्तान के ख़िलाफ़ मैच का बहिष्कार करें.",
      date: "14 January",
      link: "/news-detail",
    },
    {
      id: 3,
      image: games,
      title: "हाल ही में ब्रिटेन के कुछ सांसदों ने इंग्लैंड क्रिकेट बोर्ड से अपील की है कि वो आगामी फ़रवरी में चैंपियंस ट्रॉफ़ी में अफ़ग़ानिस्तान के ख़िलाफ़ मैच का बहिष्कार करें.",
      date: "15 January",
      link: "/news-detail",
    },
    {
        id: 3,
        image: games,
        title: "हाल ही में ब्रिटेन के कुछ सांसदों ने इंग्लैंड क्रिकेट बोर्ड से अपील की है कि वो आगामी फ़रवरी में चैंपियंस ट्रॉफ़ी में अफ़ग़ानिस्तान के ख़िलाफ़ मैच का बहिष्कार करें.",
        date: "15 January",
        link: "/news-detail",
      },
      {
        id: 3,
        image: games,
        title: "हाल ही में ब्रिटेन के कुछ सांसदों ने इंग्लैंड क्रिकेट बोर्ड से अपील की है कि वो आगामी फ़रवरी में चैंपियंस ट्रॉफ़ी में अफ़ग़ानिस्तान के ख़िलाफ़ मैच का बहिष्कार करें.",
        date: "15 January",
        link: "/news-detail",
      },

      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },

      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },


      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },



      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },

      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },
      {
        id: 3,
        image: games,
        title: "इंदौर को 'भिखारी मुक्त' बनाने की तैयारी, भीख देने वालों को भी मिलेगी सज़ा",
        date: "15 January",
        link: "/news-detail",
      },
      {
        id: 3,
        image: games,
        title: "हाल ही में ब्रिटेन के कुछ सांसदों ने इंग्लैंड क्रिकेट बोर्ड से अपील की है कि वो आगामी फ़रवरी में चैंपियंस ट्रॉफ़ी में अफ़ग़ानिस्तान के ख़िलाफ़ मैच का बहिष्कार करें.",
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
        <TnewsItem
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

export default Tnews;
