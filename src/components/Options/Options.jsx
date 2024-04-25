import { Item, List } from './Options.styled';
import { OptionItem } from './OptionItem';
import { updateOptionsList } from 'helpers';

export default function Options({ data }) {
  const updatedOptons = updateOptionsList(data);
  return (
    <List>
      {updatedOptons
        .map(option => (
          <Item key={option.key}>
            <OptionItem options={option} />
          </Item>
        ))
        .slice(0, 10)}
    </List>
  );
}
