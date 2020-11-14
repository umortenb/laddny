import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const HomePage = () => {
  return (
    <Test />
  );
}

export default HomePage;

const Test = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      user {
        name
      }
    }
  `);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    loading ? (
      <div>loading...</div>
    ) : error ? (
      <div>error :(</div>
    ) : (
      <Title>{data.user.name}</Title>
    )
  )
}