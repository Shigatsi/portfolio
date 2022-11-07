import React from "react";
import './NavigationDots.scss';

const NavigationDots: React.FC<{ active: string }> = ({
  active,
}: {
  active: string;
}) => {
  return (
    <div className="navigation__dots">
      {[
        "home",
        "about",
        "contact",
        "work",
        "skills",
        "works",
        "testimonials",
        "contacts",
      ].map((item, index) => (
        <a
          key={item+index}
          href={`#${item}`}
          className={`navigation__dot ${
            active === item ? "navigation__dot_active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
