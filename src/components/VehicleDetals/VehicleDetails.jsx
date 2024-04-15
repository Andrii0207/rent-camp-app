import { Item, List, Title } from './VehicleDetails.styled';

export function VehicleDetails({ data: { form, tank, width, length, height, consumption } }) {
  return (
    <div>
      <Title>Vehicle details</Title>
      <List>
        <Item>
          <p>Form</p>
          <span>{form}</span>
        </Item>
        <Item>
          <p>Leight</p>
          <span>{length}</span>
        </Item>
        <Item>
          <p>Width</p>
          <span>{width}</span>
        </Item>
        <Item>
          <p>Height</p>
          <span>{height}</span>
        </Item>
        <Item>
          <p>Tank</p>
          <span>{tank}</span>
        </Item>
        <Item>
          <p>Consumption</p>
          <span>{consumption}</span>
        </Item>
      </List>
    </div>
  );
}
