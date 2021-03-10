import React from "react";

const Testimonial = ({ testimony, img, author, work }) => {
  return (
    <div>
      <p>"{testimony}"</p>
      <img width="50px" src={img} alt={`foto de ${author}`} />
      <span>
        {author} | {work}
      </span>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          flex-flow: column;
          width: 100%;
          background-color: var(--second-color);
          border-radius: 15px;
          color: var(--main-color);
          text-align: center;
        }
        p {
          width: 100%;
          padding: 0 1rem;
        }
        span {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
