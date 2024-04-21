import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export default function Spinner() {
  return (
    <Container>
      <RotatingLines
        visible={true}
        height="65"
        width="65"
        color="#3f51b5"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass=""
      />
    </Container>
  );
}
