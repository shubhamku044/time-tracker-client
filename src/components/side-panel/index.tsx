import React from 'react';
import { SidePanelCon, SidePanelEl } from './styled';
import { NavLink } from 'react-router-dom';

const SidePanel = () => {
  return (
    <SidePanelCon>
      <SidePanelEl>
        <NavLink to="/">
        Time tracker
        </NavLink>
        <NavLink to="/projects">
        Projects
        </NavLink>
      </SidePanelEl>
    </SidePanelCon>
  );
};

export default SidePanel;
