import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.RY7gxUVcdboE0TxiPinx1QHaEK?rs=1&pid=ImgDetMain"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lansdowne</h1>
          {/* <h2>123 properties</h2> */}
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/R.aeeb2390426df26909619dcf0627130c?rik=xTsGNl2JfPrGSg&riu=http%3a%2f%2fedc.iba-suk.edu.pk%2fassets%2fimg%2fslides%2f1.jpg&ehk=xcRnssgKK5gnD8tjp349PfZ2S40DmgrOUGjmxagjm0A%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>EDC</h1>
          {/* <h2>533 properties</h2> */}
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.6VQcKowUB9h9Pqcqw83DvgHaDm?rs=1&pid=ImgDetMain"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Aror University</h1>
          {/* <h2>532 properties</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
