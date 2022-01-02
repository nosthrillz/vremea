import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import useImage from "../../utils/useImage";

export default function DayTile({ day, high, low, weather }) {
  const { image } = useImage(weather.image);

  return (
    <Wrapper>
      <Text>{day}</Text>
      <img src={image} alt="weather icon" />
      <HighTemp>{high}</HighTemp>
      <LowTemp>{low}</LowTemp>
    </Wrapper>
  );
}

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: inherit;
  text-align: center;
  font-weight: 500;
`;

const Temperature = styled(Text)`
  &:after {
    content: "ºC";
  }
`;

const HighTemp = styled(Temperature)``;

const LowTemp = styled(Temperature)`
  color: ${COLORS.text.secondary};
`;

const Wrapper = styled.div`
  width: min(115px, 100%);
  background: ${COLORS.bkg.ui};
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: min-content;
  grid-template-areas: "title title" "img img" "high low";
  align-items: center;
  justify-items: center;
  padding: 1rem;
  gap: 0.5rem 1rem;

  ${Text} {
    grid-area: title;
  }

  img {
    grid-area: img;
    max-height: 62px;
    margin-bottom: 1rem;
  }

  ${HighTemp} {
    grid-area: high;
  }
  ${LowTemp} {
    grid-area: low;
  }
`;
