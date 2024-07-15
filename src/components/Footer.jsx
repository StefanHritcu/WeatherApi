import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          <span>© 2024 Stefan Hritcu</span>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <span className="mr-4">Per collaborazioni o contatti:</span>
          <SocialIcon
            href="https://github.com/StefanHritcu"
            label="GitHub"
            icon={<FaGithub className="text-xl cursor-pointer" />}
          />
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=100092754104479"
            label="Facebook"
            icon={<FaFacebook className="text-xl cursor-pointer" />}
          />
          <SocialIcon
            href="mailto:tuoindirizzoemail@gmail.com"
            label="Email"
            icon={<FaEnvelope className="text-xl cursor-pointer" />}
          />
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link che porta al profilo di ${label} del creatore del sito`}
      className="text-white text-xl mx-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
    >
      {icon}
    </a>
  );
}

export default Footer;
