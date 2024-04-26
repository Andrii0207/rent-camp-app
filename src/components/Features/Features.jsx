import { Form } from 'components/Form/Form';
import { ContainerWrapper, OptionsWrapper } from './Features.styled';
import { VehicleDetails } from 'components/VehicleDetals/VehicleDetails';
import Options from 'components/Options/Options';

export function Features({ data }) {
  return (
    <ContainerWrapper>
      <div>
        <OptionsWrapper>
          <Options data={data} length="10" />
        </OptionsWrapper>
        <div>
          <VehicleDetails data={data} />
        </div>
      </div>
      <Form />
    </ContainerWrapper>
  );
}
