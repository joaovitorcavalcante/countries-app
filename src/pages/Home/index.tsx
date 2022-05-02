import { FilterField } from '../../components/FilterField';
import { SearchField } from '../../components/SearchField';
import * as S from './styles';

export function Home() {
  return (
    <S.Wrapper>
      <SearchField />
      <FilterField />
    </S.Wrapper>
  );
}
