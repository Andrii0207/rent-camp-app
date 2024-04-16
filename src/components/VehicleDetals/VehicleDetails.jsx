import { updateVehicleData } from 'helpers/updateVehicleData';
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
          <span>{updateVehicleData(length)}</span>
        </Item>
        <Item>
          <p>Width</p>
          <span>{updateVehicleData(width)}</span>
        </Item>
        <Item>
          <p>Height</p>
          <span>{updateVehicleData(height)}</span>
        </Item>
        <Item>
          <p>Tank</p>
          <span>{updateVehicleData(tank)}</span>
        </Item>
        <Item>
          <p>Consumption</p>
          <span>{consumption.toString().replace('km', ' km')}</span>
        </Item>
      </List>
    </div>
  );
}
