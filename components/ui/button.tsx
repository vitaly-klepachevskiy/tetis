import { ReactNode } from 'react';

interface Button {
  width: number;
  height: number;
  theme: 'dark' | 'light' | 'transparent';
  children: ReactNode;
}

export default function Button({ width, height, theme, children }: Button) {
  const style =
    theme === 'dark'
      ? { backgroundColor: '#1C1B1E', color: '#FFFEFC', border: 'none' }
      : theme === 'light'
      ? { backgroundColor: '#FFFEFC', color: '#1C1B1E', border: 'none' }
      : {
          backgroundColor: 'transparent',
          color: '#FFFEFC',
          border: '1px solid #FFFEFC',
        };
  const { backgroundColor, border, color } = style;

  return (
    <button style={{ width, height, backgroundColor, border, color }}>
      {children}
    </button>
  );
}
