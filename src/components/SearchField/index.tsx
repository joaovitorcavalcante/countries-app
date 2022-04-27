import * as S from './styles';

export function SearchField() {
  return (
    <S.Wrapper>
      <S.SearchIcon size={22} />
      <S.Input placeholder="Search for a country..." />
    </S.Wrapper>
  );
}
