import React from 'react';

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: '#333333', width: '100%', padding: '20px 0' }}>
        <div className="container" style={{ color: 'white' }}>
          <div className="row">
            <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>आप बीबीसी पर क्यों भरोसा कर सकते हैं</h2>
          </div>
          <hr />

          <div className="row">
            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>इस्तेमाल की शर्तें</h2>
            </div>

            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>निजता की नीति</h2>
            </div>

            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>बीबीसी से संपर्क</h2>
            </div>

            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Do not share or sell my info</h2>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>बीबीसी के बारे में</h2>
            </div>

            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>कुकीज़</h2>
            </div>

            <div className="col-2">
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>अन्य भाषाएँ</h2>
            </div>
          </div>
          <hr />

          <div className="row">
            <h2 style={{ fontSize: '13px', fontWeight: 'bold' }}>बीबीसी के लिए कलेक्टिव न्यूज़रूम की ओर से प्रकाशित</h2>
          </div>
          <hr />

          <div className="row">
            <h5 style={{ fontSize: '13px', fontWeight: 'bold' }}>
              © 2025 BBC. बाहरी साइटों की सामग्री के लिए बीबीसी ज़िम्मेदार नहीं है. बाहरी साइटों का लिंक देने की हमारी नीति के बारे में पढ़ें.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
