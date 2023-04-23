import type { ReactNode } from 'react';

export interface HeaderProps {
  title: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}
