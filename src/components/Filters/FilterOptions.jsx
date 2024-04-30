import {
  ButtonOption,
  FilterList,
  FilterName,
  FilterWrapper,
  Item,
  Title,
  TitleWrapper,
  WrapperIcon,
} from './FilterOptions.styled';
import { ReactComponent as ACicon } from '../../images/icons/ac2.svg';
import { ReactComponent as AutomaticIcon } from '../../images/icons/automatic2.svg';
import { ReactComponent as KitchenIcon } from '../../images/icons/kitchen2.svg';
import { ReactComponent as TVicon } from '../../images/icons/tv.svg';
import { ReactComponent as ShowerIcon } from '../../images/icons/shower.svg';
import { ReactComponent as VanIcon } from '../../images/icons/type_van.svg';
import { ReactComponent as FullyIntIcon } from '../../images/icons/type_fully_int.svg';
import { ReactComponent as AlcoveIcon } from '../../images/icons/type_alcove.svg';

export function FilterOptions() {
  return (
    <FilterWrapper>
      <div>
        <FilterName>Filters</FilterName>
        <TitleWrapper>
          <Title>Vehicle equipment</Title>
        </TitleWrapper>
        <FilterList>
          <Item>
            <ButtonOption type="button">
              <WrapperIcon>
                <ACicon />
              </WrapperIcon>
              <p>AC</p>
            </ButtonOption>
          </Item>
          <Item>
            <ButtonOption>
              <WrapperIcon>
                <AutomaticIcon />
              </WrapperIcon>
              <p>Automatic</p>
            </ButtonOption>
          </Item>
          <Item>
            <ButtonOption>
              <WrapperIcon>
                <KitchenIcon />
              </WrapperIcon>
              <p>Kitchen</p>
            </ButtonOption>
          </Item>
          <Item>
            <ButtonOption>
              <WrapperIcon>
                <TVicon />
              </WrapperIcon>
              <p>TV</p>
            </ButtonOption>
          </Item>
          <Item>
            <ButtonOption>
              <WrapperIcon>
                <ShowerIcon />
              </WrapperIcon>
              <p>Shower/WC</p>
            </ButtonOption>
          </Item>
        </FilterList>
      </div>

      <div>
        <TitleWrapper>
          <Title>Vehicle type</Title>
        </TitleWrapper>
        <FilterList>
          <Item>
            <ButtonOption>
              <span>
                <VanIcon />
              </span>
              <p>AC</p>
            </ButtonOption>
          </Item>
          <Item>
            <ButtonOption>
              <span>
                <FullyIntIcon />
              </span>
              <p>Automatic</p>
            </ButtonOption>
          </Item>
          <Item>
            <ButtonOption>
              <span>
                <AlcoveIcon />
              </span>
              <p>Kitchen</p>
            </ButtonOption>
          </Item>
        </FilterList>
      </div>
    </FilterWrapper>
  );
}
