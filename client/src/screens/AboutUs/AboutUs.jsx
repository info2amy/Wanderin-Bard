import Layout from "../../components/shared/Layout/Layout";
import "./AboutUs.css";
function AboutUs(props) {
  return (
    <Layout user={props.user}>
      <div className="about-us-parent-div">
        <h1 id="about-us-title">Meet the Band!</h1>
        <div className="about-us-profiles">
          <img
            className="about-us-pics"
            src="https://ca.slack-edge.com/T0351JZQ0-U018F0J0WVD-10fba7507507-512"
            alt="Amy"
          />
          <div className="about-us-profile-info">
            <h2>Amy Kumar</h2>
            <p>
              Thomas Sten is a software engineer with over 15 years of military
              experience. His passion for learning combined with his optimistic
              demeanor has resulted in a richly rewarding experience as a
              software engineer.
            </p>
            <div class="about-us-contact">
              <p>Github: </p>
              <a href="https://github.com/info2amy">
                <img
                  src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
                  alt="Github"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="about-us-profiles">
          <img
            className="about-us-pics"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGt6MJCkwXh0A/profile-displayphoto-shrink_800_800/0/1607315660426?e=1616025600&v=beta&t=jnDU3yV8fpodWC_-jAOnBJRYFewiBP7X99lG4UV5ZpQ"
            alt="Thomas"
          />
          <div className="about-us-profile-info">
            <h2>Thomas Sten</h2>
            <p>
              Thomas Sten is a software engineer with over 15 years of military
              experience. His passion for learning combined with his optimistic
              demeanor has resulted in a richly rewarding experience as a
              software engineer.
            </p>
            <div class="about-us-contact">
              <p>Github: </p>
              <a href="https://github.com/Jiggorama">
                <img
                  src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
                  alt="Github"
                />
              </a>
              <div class="about-us-linkedin">
                <p>LinkedIn: </p>
                <a href="https://www.linkedin.com/in/thomas-sten/">
                  <img
                    class="social"
                    src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-profiles">
          <img
            className="about-us-pics"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71748195_2318375211621647_4571670143138004992_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=OaXdWTF7yjkAX9OCl3-&_nc_ht=scontent-lga3-1.xx&oh=dc0293652a7057fd4b61fe9363a97f20&oe=602165AE"
            alt="David"
          />
          <div className="about-us-profile-info">
            <h2>David Verghese</h2>
            <p>
              David Verghese is a software developer and musician from City
              Island, New York. He is looking for an entry level position as a
              junior software developer in a music or media-related tech company
              where he can fully develop his technical and artistic skills.
            </p>
            <div class="about-us-contact">
              <p>Github: </p>
              <a href="https://git.generalassemb.ly/davidverghesegeneralassembly">
                <img
                  src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
                  alt="Github"
                />
              </a>
              <div class="about-us-linkedin">
                <p>LinkedIn: </p>
                <a href="https://www.linkedin.com/in/david-verghese-a308a011b">
                  <img
                    class="social"
                    src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-profiles">
          <img
            className="about-us-pics"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGnOJP0RWb44Q/profile-displayphoto-shrink_800_800/0/1606442156456?e=1616025600&v=beta&t=8q_yiFvluBTe8uU-mV5UPiwIAXync3QSqXcVCUwkTMk"
            alt="Gylych"
          />
          <div className="about-us-profile-info">
            <h2>Gylych Mammedov</h2>
            <p>
              Gylych is an efficient junior web developer with a Master's degree
              in Web and App Development. He has a complete understanding of the
              entire software development lifecycle. He is looking for an
              entry-level opportunity in a dynamic organization where his skills
              will be fully utilized.{" "}
            </p>
            <div class="about-us-contact">
              <p>Github: </p>
              <a href="https://github.com/gylych207">
                <img
                  src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
                  alt="Github"
                />
              </a>
              <div class="about-us-linkedin">
                <p>LinkedIn: </p>
                <a href="https://www.linkedin.com/in/gylych-mammedov-286898200/">
                  <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default AboutUs;
