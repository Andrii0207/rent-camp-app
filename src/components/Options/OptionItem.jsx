import { OptionData } from 'helpers';
import { IconSpan, Wrapper } from './OptionItem.styled';

export function OptionItem({ options: { key, value } }) {
  const Icon = OptionData[key].icon;
  const title = OptionData[key].title;

  return (
    <Wrapper>
      <IconSpan>
        <Icon />
      </IconSpan>
      {typeof value === 'number' ? (
        <span>{value !== 1 && value !== 0 && value}</span>
      ) : (
        <span>{title !== value && value}</span>
      )}
      <p>{title}</p>
    </Wrapper>
  );
}
