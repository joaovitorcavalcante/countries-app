import * as S from './styles';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Where in the world?</S.Title>
        <S.ToggleTheme>
          <S.Icon size={16} />
          Dark Mode
        </S.ToggleTheme>
      </S.Content>
    </S.Wrapper>
  );
}
