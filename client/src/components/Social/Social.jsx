import "./social.css";

const Social = ({ active }) => {
  const icons = [
    {
      id: 1,
      link: "https://www.google.com/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      id: 2,
      link: "https://www.google.com/",
      iconClass: "fa-brands fa-facebook-f",
    },
    {
      id: 3,
      link: "https://www.google.com/",
      iconClass: "fa-brands fa-x-twitter",
    },
  ];

  return (
    <div className={`social__wrapper ${active && "active"}`}>
      <div className="social__text">Let's connect on social media</div>

      <div className="social__links">
        {icons.map((icon) => (
          <a key={icon.id} href={icon.link} target="blank">
            <i className={icon.iconClass} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
