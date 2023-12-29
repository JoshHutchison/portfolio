import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer id='contact' className="bg-gray-800">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center text-white text-3xl">Contact me</div>
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <div className="px-5 py-2">
              <a
                href="https://www.linkedin.com/in/josh-g-hutchison/"
                target="_blank"
                className="text-sm text-gray-500 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" className="px-2" />
                LinkedIn
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://github.com/JoshHutchison"
                target="_blank"
                className="text-sm text-gray-500 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" className="px-2"/>
                Github
              </a>
            </div>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2023 Josh Hutchison
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Contact;
