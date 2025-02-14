import { format } from "date-fns";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function HeroHome({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="top-post">
      <Link to={`/post/${_id}`} className="top-post-link">
        <div
          className="top-image"
          style={{ backgroundImage: `url(${cover})` }}
        > 
          <h2 className="top-post-title">{title}</h2>
        </div>
      </Link>
      {/* <div className="content">
        <p className="info">
          <a href="/" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "yyyy-MM-dd")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div> */}
    </div>
  );
}
