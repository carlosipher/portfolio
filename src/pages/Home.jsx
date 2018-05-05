import React from 'react';

const Home = () => (
  <div className="Home">
    <div className="Contact">
      <h1>Carlotta Dadey</h1>
      <h2>Designer / Stylist based in NYC</h2>
      <p>{ typeof window !== undefined &&
        <a href="mailto:carlottadadey@gmail.com">carlottadadey@gmail.com</a> }
      </p>
    </div>
    {/* <div className="PageContent">
      <div className="Intro">
        <p className="Skills">Patternmaking for apparel and footwear / Design synthesis / Drawing and render- ing / Specification sheets and tech packs / Printmaking / Textile development / Industrial machine knowledge for apparel and footwear / Trim selection and fabrication / Footwear construction and upper construction</p>
      </div>
      <div className="HomeSections">
        <section>
          <img src="/img/project-1.png" />
        </section>
        <section>
          <img src="/img/project-2.png" />
        </section>
        <section>
          <img src="/img/project-3.png" />
        </section>
        <section>
          <img src="/img/project-4.png" />
        </section>
        <section>
          <img src="/img/project-5.png" />
        </section>
        <section>
          <img src="/img/project-6.png" />
        </section>
        <section>
          <img src="/img/project-7.png" />
        </section>
      </div>
      <div className="Pattern"></div>
    </div> */}
  </div>
);

export default Home;
