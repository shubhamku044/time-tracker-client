import React from 'react';
import { ConApp, LayoutCon } from './styled';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <LayoutCon className="">
      <ConApp>
        {children}
      </ConApp>
    </LayoutCon>
  );
};

export default Layout;
