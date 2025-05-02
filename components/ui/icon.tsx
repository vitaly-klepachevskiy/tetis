import Image from 'next/image';

interface Icon {
  name: string;
  theme: 'light' | 'dark';
  type: 'socialMedia' | 'scroll';
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function Icon(props: Icon) {
  const { name, theme, type, width, height, onClick } = props;
  return (
    <Image
      src={`/${type}/${name}-${theme}.svg`}
      alt={name}
      width={width ?? 15}
      height={height ?? 15}
      onClick={onClick}
    />
  );
}
