import React from "react";
import "./footer.css";
import lightLogo from "../../assets/light-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={lightLogo} className="logo" alt="" />
        <div className="footer-ul-container">
          <ul className="category">
            <li className="category-title">men</li>
            <li>
              <Link to="#" className="footer-link">
                t-shirts
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                sweatshirts
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                shirts
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                jeans
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                trousers
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                shoes
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                casuals
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                formals
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                sports
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                watch
              </Link>
            </li>
          </ul>
          <ul className="category">
            <li className="category-title">women</li>
            <li>
              <Link to="#" className="footer-link">
                t-shirts
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                sweatshirts
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                shirts
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                jeans
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                trousers
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                shoes
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                casuals
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                formals
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                sports
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                watch
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-title">about company</p>
      <p className="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat
        ratione et vero maxime praesentium, architecto minima reiciendis iste
        quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates
        rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in
        rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo
        aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo
        culpa reprehenderit excepturi distinctio tempore cupiditate praesentium
        nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab
        debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt
        quasi placeat omnis, itaque harum?
      </p>
      <p className="info">
        support emails - help@clothing.com, customersupport@clothing.com
      </p>
      <p className="info">telephone - 180 00 00 001, 180 00 00 002</p>
      <div className="footer-social-container">
        <div>
          <Link to="#" className="social-link">
            terms & services
          </Link>
          <Link to="#" className="social-link">
            privacy page
          </Link>
        </div>
        <div>
          <Link to="#" className="social-link">
            instagram
          </Link>
          <Link to="#" className="social-link">
            facebook
          </Link>
          <Link to="#" className="social-link">
            twitter
          </Link>
        </div>
      </div>
      <p className="footer-credit">Clothing, Best apparels online store</p>
    </footer>
  );
};

export default Footer;
