import React from 'react';


function Article({ date, title, image, content }) {
  return (
    <article>
      <time>{date}</time>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        <span className="dropcap">{content.charAt(0)}</span>
        {content.slice(1)}
      </p>
      <a href="#" className="continue">Continues ...</a>
    </article>
  );
}

export default Article;
