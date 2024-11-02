import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import userImg from './assets/user.png';
import landingImg from './assets/landingImg.png';
import centerImg from './assets/centerimg.png';
import sprintBtn from './assets/sprintbtn.png';
import audiocallBtn from './assets/audiocallbtn.png';
import lastImg from './assets/lastImg.png';
import last1Img from './assets/last1img.png';
import gitIcon from './assets/gticon.png';
import ytIcon from './assets/yticon.png';
import icIcon from './assets/icongit.png';

function App() {

  return (
    <div id="main">
      <section id="navbar" style={{ backgroundColor: '#F6F5F4' }}>
        <Navbar expand="lg" className="bg-body-tertiary py-2">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand href="#home" className="fw-bold">GlobalTalk</Navbar.Brand>
            <div className="d-none d-lg-flex gap-3">
              <a className="text-decoration-none" href="#home">Home</a>
              <a className="text-decoration-none" href="#textbook">Textbook</a>
              <a className="text-decoration-none" href="#statistics">Statistics</a>
            </div>
            <div className="d-flex align-items-center">
              <a className="text-decoration-none pe-3 text-center" href="#profile">
                <img src={userImg} alt="User" className="pe-1" style={{ width: '25px' }} /> Alex
              </a>
              <a className="text-decoration-none" href="#signout">Sign Out</a>
            </div>
          </Container>
        </Navbar>
      </section>

      {/* Landing Section */}
      <div id='home' className="d-flex flex-column flex-lg-row align-items-center my-5 px-3">
        <div className="text-center text-lg-start w-100 w-lg-50 p-3">
          <h6 className="text-lg font-semibold pt-5">E-COURSE PLATFORM</h6>
          <h2 className="text-3xl font-bold leading-tight">
            Learning and<br />
            teaching online,<br />
            made easy.
          </h2>
          <p className="text-sm mt-3">
            Practice your English and learn new things with the platform.
          </p>
          <a className="btn rounded-pill mt-4 px-4 py-2" href="#about" 
          style={{backgroundColor: 'rgba(72, 209, 204, 0.8)',border: 'none',color:"#2B788B"}}>
          About platform
        </a>
        </div>
        <div className="w-100 w-lg-50 p-3 d-flex justify-content-center">
          <img className="img-fluid" src={landingImg} alt="Landing" />
        </div>
      </div>

      {/* Center Section */}
      <div className="d-flex flex-column flex-lg-row align-items-center my-5 px-3">
        <div className="w-100 w-lg-50 p-3 d-flex justify-content-center">
          <img className="img-fluid" src={centerImg} alt="Center" />
        </div>
        <div className="text-center text-lg-start w-100 w-lg-50 p-3">
          <h2 className="text-3xl font-semibold">Learn a language<br />in a playful way</h2>
          <p className="text-sm mt-3 mb-4">Make learning words more fun with mini-games</p>
          <div className="d-flex justify-content-center justify-content-lg-start gap-3">
            <a href="#sprint" className="btn"><img src={sprintBtn} alt="Sprint Button" /></a>
            <a href="#audiocall" className="btn"><img src={audiocallBtn} alt="Audio Call Button" /></a>
          </div>
        </div>
      </div>

      {/* Vocabulary Section */}

      <div id='textbook' className="d-flex flex-column flex-lg-row align-items-center my-5 px-3" style={{backgroundColor: '#F6F5F4' }}>
        <div className="text-center text-lg-start w-100 w-lg-50 p-3">
          <h2 className="text-3xl font-semibold">Increase your<br />vocabulary</h2>
          <h6 className="text-lg font-semibold">Traditional and new effective approaches to word study</h6>
          <a className="btn rounded-pill mt-4 px-4 py-2" href="#about" 
          style={{backgroundColor: 'rgba(72, 209, 204, 0.8)',border: 'none',color:"#2B788B"}}>
            Textbook
          </a>
        </div>
        <div className="w-100 w-lg-50 p-3 d-flex justify-content-center">
          <img className="img-fluid" src={lastImg} alt="Vocabulary" />
        </div>
      </div>

      {/* Progress Section */}
      <div id='statistics' className="d-flex flex-column flex-lg-row align-items-center my-5 px-3">
        <div className="w-100 w-lg-50 p-3 d-flex justify-content-center">
          <img className="img-fluid" src={last1Img} alt="Progress" />
        </div>
        <div className="text-center text-lg-start w-100 w-lg-50 p-3">
          <h2 className="text-3xl font-semibold">Watch your<br />progress every<br />day</h2>
          <h6 className="text-lg font-semibold">Save statistics on your achievements, words learned, and mistakes</h6>
          <a className="btn rounded-pill mt-4 px-4 py-2" href="#about" 
          style={{backgroundColor: 'rgba(72, 209, 204, 0.8)',border: 'none',color:"#2B788B"}}>
            Statistics
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-100 bg-light py-4 mt-5">
        <Container className="pt-3">
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <ul className="list-unstyled d-flex gap-3 mb-3 mb-lg-0">
              <li><a href="#home" className="text-decoration-none">Home</a></li>
              <li><a href="#textbook" className="text-decoration-none">Textbook</a></li>
              <li><a href="#statistics" className="text-decoration-none">Statistics</a></li>
              <li><a href="#sprint" className="text-decoration-none">Sprint</a></li>
              <li><a href="#audiocall" className="text-decoration-none">Audio-call</a></li>
            </ul>
            <ul className="list-unstyled d-flex gap-3">
              <li><a href="#alex" className="text-decoration-none">Alex</a></li>
              <li><a href="#gabriel" className="text-decoration-none">Gabriel</a></li>
              <li><a href="#marcus" className="text-decoration-none">Marcus</a></li>
            </ul>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-3">
            <ul className="list-unstyled d-flex gap-3 mb-3 mb-lg-0">
              <li><a href="#github" className="text-decoration-none"><img src={gitIcon} alt="GitHub" /></a></li>
              <li><a href="#youtube" className="text-decoration-none"><img src={ytIcon} alt="YouTube" /></a></li>
              <li><a href="#icon" className="text-decoration-none"><img src={icIcon} alt="Icon" /></a></li>
            </ul>
            <div>2024 GlobalTalks. Project made by Shamil Rahman PK</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
