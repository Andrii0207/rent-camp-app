import { cutDescriptionText } from 'helpers';
import { Text } from './Description.styled';

export function Description({ text }) {
  return <Text>{cutDescriptionText(text)}</Text>;
}
