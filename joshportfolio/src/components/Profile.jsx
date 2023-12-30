import profilePic from "../assets/profilepic.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons"

const Profile = () => {
  return (
    <section id="home" className="relative flex items-center w-full bg-black">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 md:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
            <div className="relative items-center gap-12 m-auto md:inline-flex">
              <div className="max-w-xl text-center md:text-left">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white md:text-2xl">
                    Josh Hutchison | Full Stack Developer
                  </p>
                  <p className="text-xl font-medium tracking-tight text-white md:text-3xl lg:text-6xl">
                    Crafting exceptional solutions through code mastery
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Hey there, I'm Josh 👋, a seasoned software developer with a
                    knack for problem-solving and a background in electronic
                    engineering. My journey into software began in roles
                    spanning software automation, systems integration, and
                    technical support, allowing me to cultivate a robust skill
                    set in Java, Python, and Web Development over the past 5
                    years.
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Beyond coding, my interests lie in video games, biking, and
                    snowboarding. These passions provide a refreshing break and
                    often infuse my problem-solving approach with creativity and
                    strategic thinking. Whether conquering virtual worlds or
                    navigating challenging terrains, these hobbies nurture my
                    resilience and adaptability—qualities that seamlessly
                    translate into my work in software development. I'm
                    enthusiastic about exploring opportunities where I can
                    leverage my technical expertise, problem-solving prowess,
                    and passion for innovation to contribute meaningfully.
                    Looking forward to connecting and embarking on exciting
                    projects together!
                  </p>
                </div>
                <div className="flex justify-center mt-8 space-x-6">
                  <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
                    <div className="px-5 py-2">
                      <a
                        href="https://www.linkedin.com/in/josh-g-hutchison/"
                        target="_blank"
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="xl"
                          className="px-2"
                        />
                        LinkedIn
                      </a>
                    </div>
                    <div className="px-5 py-2">
                      <a
                        href="https://github.com/JoshHutchison"
                        target="_blank"
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="xl"
                          className="px-2"
                        />
                        Github
                      </a>
                    </div>
                    <div className="px-5 py-2">
                    <a
                  className="text-sm text-gray-500 hover:text-blue-600"
                  href="/src/assets/JoshHutchison.pdf"
                  tager="_blank"
                  download
                >
                  <FontAwesomeIcon
                          icon={faFileLines}
                          size="xl"
                          className="px-2"
                        />
                  Resume
                </a>
                </div>
                  </span>
                </div>
                
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square sm:mt-0 sm:order-first">
              <img
                className="object-cover object-center w-full mx-auto bg-gray-300 sm:ml-auto"
                alt="hero"
                src={profilePic}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
