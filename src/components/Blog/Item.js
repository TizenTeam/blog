import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaCalendar from "react-icons/lib/fa/calendar";

import FaTag from "react-icons/lib/fa/tag";
import Img from "gatsby-image";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import Corner from "../../layouts/corner";

const Item = props => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        authorImg,
        cover: {
          children: [{ sizes }]
        }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <Img sizes={sizes} />
          <h1>
            {title} <FaArrowRight className="arrow" />
          </h1>
          <Corner type={category} icon={category.replace(' ', '')} />
          <p className="meta">
            <span className="author-info">
              {author}
              <img className="author-img" src={authorImg}/>
            </span>
            <span>
              <FaCalendar size={18} /> {prefix}
            </span>
            {category && (
              <span>
                <FaTag size={18} /> {category}
              </span>
            )}
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.link) {
          width: 100%;
          color: ${theme.text.color.primary};
        }

        li {
          border: 1px solid transparent;
          border-radius: ${theme.size.radius.default};
          margin: ${`calc(${theme.space.default}) 20px calc(${theme.space.default} * 2)`};
          position: relative;
          transition: all ${theme.time.duration.default};
          background: transparent;

          :global(.gatsby-image-outer-wrapper) {
            border-radius: ${theme.size.radius.default};
            border: 1px solid ${theme.line.color};
            overflow: hidden;
          }
          :global(.gatsby-image-outer-wrapper img) {
            z-index: -1;
          }

          &::after {
            border-top: 1px solid ${theme.line.color};
            content: "";
            height: 0;
            position: absolute;
            bottom: ${`calc(${theme.space.default} * -1.5)`};
            left: 50%;
            transform: translateX(-50%);
            transition: all ${theme.time.duration.default};
            width: 50%;
          }
        }

        h1 {
          padding: ${theme.space.m} ${theme.space.s} 0;
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;

          :global(.arrow) {
            display: none;
          }
        }

        h2 {
          font-size: ${theme.blog.h2.size};
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          padding: ${theme.space.m} ${theme.space.s};
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }

        p {
          line-height: 1.5;
          padding: 0 ${theme.space.s};
          text-remove-gap: both;
        }

        @from-width tablet {
          li {
            &::after {
              bottom: ${`calc(${theme.space.default} * -2)`};
            }
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }
        @from-width desktop {
          li {
            margin: ${`calc(${theme.space.default} * 2) 20px calc(${theme.space.default} * 3)`};
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }
          h1 {
            font-size: 1.6em;
            padding: ${`calc(${theme.space.default} * 1.2) calc(${theme.space.default} * 1.5) 0`};
          }
          .meta,
          p {
            padding: ${`0 calc(${theme.space.default} * 1.5)`};
          }
          @media (hover: hover) {
            li {
              &:hover {
                border: 1px solid ${theme.line.color};
                box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);

                &:after {
                  bottom: ${`calc(${theme.space.default} * -2.5)`};
                }
                :global(.gatsby-image-wrapper) {
                  transform: scale(1.1);
                  transition: all ${theme.time.duration.default};
                }
                h1 {
                  color: ${theme.blog.h1.hoverColor};
                }
                :global(.arrow) {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              :global(.arrow) {
                display: inline-block;
                fill: ${theme.color.special.attention};
                opacity: 0;
                transition: all 0.5s;
                transform: translateX(-50%);
              }
            }
          }
        }

        .corner {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 80px;
          height: 80px;
          border-bottom-right-radius: 100%;
          color: white;
          background-color: #706cf5;
        }

        .feature-text {
          text-indent: -999px;
          display: block;
          float: left;
        }

        :global(.icon) {
          margin: 10px;
        }

        .author-info {
          width: 100%;
          text-align: right;
        }

        .author-img {
          display: block;
          width: 50px;
          height: 50px;
          margin-left: 10px;
          border-radius: 50%;
          z-index: 1; 
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Item;
