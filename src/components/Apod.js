import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Apod.css';

class Apod extends Component {
  dateLocaleString() {
    const { item } = this.props;

    return new Date(Date.parse(item.date)).toLocaleString(
      document.documentElement.lang, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      },
    );
  }

  render() {
    const { item } = this.props;

    return (
      <article className="apod">
        <figure className="apod__figure">
          {item.media_type === 'video'
            ? (
              <iframe className="apod__video" src={item.url} title={item.title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            ) : (
              <a rel="noopener noreferrer" href={item.url} target="_blank">
                <img className="apod__image" src={item.url} alt={item.title} />
              </a>
            )
          }
          <figcaption className="apod__copyright">
            <span className="text-bold">Image Credits:</span>
            &nbsp;
            {item.copyright ? item.copyright : 'Public Domain'}
          </figcaption>
        </figure>
        <header className="apod__header">
          <h3 className="apod__title">{item.title}</h3>
          <time className="apod__date" dateTime={item.date}>{this.dateLocaleString()}</time>
        </header>
        <p className="apod__explanation">{item.explanation}</p>
      </article>
    );
  }
}

Apod.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default Apod;
