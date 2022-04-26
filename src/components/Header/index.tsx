import * as S from './styles';

type HeaderProps = {
  onToggleTheme: () => void;
};

export function Header({ onToggleTheme }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Where in the world?</S.Title>
        <S.ToggleTheme onClick={onToggleTheme}>
          <S.Icon size={16} />
          Dark Mode
        </S.ToggleTheme>
      </S.Content>
    </S.Wrapper>
  );
}
