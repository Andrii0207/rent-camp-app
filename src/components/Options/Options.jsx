import { OptionItem, OptionList } from './Options.styled';

export default function Options({ data }) {
  const {
    adults,
    transmission,
    engine,
    details: { beds },
  } = data;
  return (
    <OptionList>
      <OptionItem>
        <p>{adults} adults</p>
      </OptionItem>
      <OptionItem>
        <p>{transmission}</p>
      </OptionItem>
      <OptionItem>
        <p>{engine}</p>
      </OptionItem>
      <OptionItem>
        <p> kitchen</p>
      </OptionItem>
      <OptionItem>
        <p>{beds} beds</p>
      </OptionItem>
      <OptionItem>
        <p> AC</p>
      </OptionItem>
    </OptionList>
  );
}
