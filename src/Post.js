import { format } from "date-fns";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <Link to={`/post/${_id}`} className="post-link">
        <div
          className="image"
          style={{
            backgroundImage: `url(${cover})`,
          }}
        ></div>
      </Link>
      <div className="content">
        {" "}
        <h2 className="post-title">{title}</h2>
        <p className="info">
          <a href="/" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "yyyy-MM-dd")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
