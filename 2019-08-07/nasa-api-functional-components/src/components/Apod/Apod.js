import React from 'react';
import axios from 'axios';

const API_KEY = 'DEMO_KEY';

const style = {
  maxWidth: '500px',
};

const Apod = ({ match }) => {
  const date = match.params.date;

  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`,
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [date]);

  let content;
  if (data)
    content = (
      <React.Fragment>
        <h1>
          <em>{data.title}</em>
        </h1>
        <img
          src={data.url}
          alt={data.explanation}
          style={style}
        />
        <p style={style}>{data.explanation}</p>
      </React.Fragment>
    );
  if (loading) content = 'Loading…';
  if (error) content = 'Error!';

  return <div>{content}</div>;
};
export default Apod;
