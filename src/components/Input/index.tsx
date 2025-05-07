import * as S from './styled'

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, placeholder, onChange }: Props) => (
  <S.StyledInput
    value={value}
    placeholder={placeholder}
    onChange={({ target: { value: val } }) => onChange(val)}
  />
)
