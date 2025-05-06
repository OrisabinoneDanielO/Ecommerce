import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          sequi blanditiis in nobis cum quas officia animi cupiditate ullam
          dolor, optio veritatis recusandae iusto impedit nostrum, ducimus rem
          repellat deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur, nulla fugit dolorum ullam sapiente ipsum incidunt
          voluptatibus molestiae nihil praesentium quasi dicta dolores numquam
          maiores esse modi repellat id aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          labore repudiandae commodi facere tenetur fugit similique, consequatur
          minima, accusamus alias illo quibusdam? Voluptate dolor vero iure
          possimus unde. Fugit, corporis.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
