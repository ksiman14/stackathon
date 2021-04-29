import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryPie, VictoryLabel } from 'victory';
import { fetchGenres } from '../store/allGenres';

class GenrePie extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    const genres = this.props.genres || [];
    return (
      <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          width={400}
          height={400}
          data={genres
            .filter((genre) => genre.movies.length >= 100)
            .map((genre) => {
              return {
                x: genre.name,
                y: genre.movies.length,
              };
            })}
          innerRadius={68}
          labelRadius={100}
          style={{ labels: { fontSize: 12, fill: 'white' } }}
          colorScale="warm"
          events={[
            {
              target: 'data',
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      mutation: (props) => {
                        return {
                          style: { ...props.style, fill: 'black' },
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20, fill: 'white' }}
          x={200}
          y={200}
          text="Most Popular Genres"
        />
      </svg>
    );
  }
}

const mapState = (state) => ({
  genres: state.genres,
});

const mapDispatch = (dispatch) => ({
  fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(mapState, mapDispatch)(GenrePie);
