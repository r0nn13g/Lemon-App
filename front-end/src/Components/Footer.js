import "../Styles/footer.css";
import nycDoe from '../assets/NYC_DOE_Logo.png';
import nycGov from '../assets/nygov-logo.png';
function Footer() {
  return (
    <div className="footer">
      <div className="nyc-doe-logo">
        <img src={nycDoe} alt="p"/>
      <div className="nyc-gov-logo">
        <img src={nycGov} alt="p"/>
      </div>
      </div>
      <ul>
        <li>Resources</li>
        <li>Snap</li>
        <li>NY.Gov</li>
        <li>apply for benefits</li>
      </ul>
      <div className="content-container">
      <p>Helping Hand®</p>
      </div>
      </div>
  )
}

export default Footer