import React from 'react';
import { SidePanelCon, SidePanelEl } from './styled';
import { NavLink } from 'react-router-dom';
import {BiTime} from 'react-icons/bi'
import {VscProject} from 'react-icons/vsc'
const SidePanel = () => {
  return (
    <SidePanelCon>
      <SidePanelEl>
        <NavLink to="/">
          <BiTime/>
        <span>Time Tracker</span>
        </NavLink>
        <NavLink to="/projects">
        <VscProject/>
        <span>Projects</span>
        </NavLink>
      </SidePanelEl>
    </SidePanelCon>
  );
};

export default SidePanel;
