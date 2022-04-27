import * as S from './styles';

type HeaderProps = {
  onToggleTheme: () => void;
  themeActive: string;
};

export function Header({ themeActive, onToggleTheme }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Where in the world?</S.Title>
        <S.ToggleTheme onClick={onToggleTheme}>
          {themeActive === 'light' ? (
            <>
              <S.DarkIcon size={16} />
              Dark Mode
            </>
          ) : (
            <>
              <S.LightIcon size={16} />
              Light Mode
            </>
          )}
        </S.ToggleTheme>
      </S.Content>
    </S.Wrapper>
  );
}
