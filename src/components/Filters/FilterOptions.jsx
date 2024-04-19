import { FilterList, FilterName, FilterWrapper, Item, Title, TitleWrapper } from './FilterOptions.styled';

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
            <p>AC</p>
          </Item>
          <Item>
            <p>Automatic</p>
          </Item>
          <Item>
            <p>Kitchen</p>
          </Item>
          <Item>
            <p>TV</p>
          </Item>
          <Item>
            <p>Shower/WC</p>
          </Item>
        </FilterList>
      </div>

      <div>
        <TitleWrapper>
          <Title>Vehicle type</Title>
        </TitleWrapper>
        <FilterList>
          <Item>
            <p>AC</p>
          </Item>
          <Item>
            <p>Automatic</p>
          </Item>
          <Item>
            <p>Kitchen</p>
          </Item>
        </FilterList>
      </div>
    </FilterWrapper>
  );
}
