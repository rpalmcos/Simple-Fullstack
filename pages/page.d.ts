
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayoutForPage?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};