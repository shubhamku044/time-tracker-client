import React from 'react';
import { SidePanel } from '../../components';
import { ConApp, LayoutCon } from './styled';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <LayoutCon>
      <SidePanel />
      <ConApp>
        {children}
      </ConApp>
    </LayoutCon>
  );
};

export default Layout;
