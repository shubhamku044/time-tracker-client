
import React from 'react';
import { BiBarChartSquare, BiCalendar, BiTime } from 'react-icons/bi';
import { BsCardList, BsFileBarGraph, BsTag } from 'react-icons/bs';
import { CiViewTimeline } from 'react-icons/ci';
import { FaCog } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { MdFace, MdSchedule } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { VscProject } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { HeadingText, LinkText, SidePanelCon, SidePanelEl } from './styled';
'react-icons/md';
'react-icons/ci';

const SidePanel = () => {
  return (
    <SidePanelCon>
      <SidePanelEl>
        <NavLink to="/">
          <CiViewTimeline size={32} color="#9CA3AF" />
          <LinkText>TIMESHEET</LinkText>
        </NavLink>
        <NavLink to="/time-tracker">
          <BiTime size={28} color="#9CA3AF" />
          <LinkText>TIME TRACKER</LinkText>
        </NavLink>
        <NavLink to="/development">
          <BiCalendar size={28} color="#9CA3AF" />
          <LinkText>CALENDAR</LinkText>
        </NavLink>
      </SidePanelEl>
      <HeadingText>ANALYZE</HeadingText>
      <SidePanelEl>
        <NavLink to="/development">
          <RxDashboard size={28} color="#9CA3AF" />
          <LinkText>DASHBOARD</LinkText>
        </NavLink>
        <NavLink to="/development">
          <BsFileBarGraph size={28} color="#9CA3AF" />
          <LinkText>REPORTS</LinkText>
        </NavLink>
      </SidePanelEl>
      <HeadingText>MANAGE</HeadingText>
      <SidePanelEl>
        <NavLink to="/development">
          <BsCardList size={28} color="#9CA3AF" />
          <LinkText>PROJECTS</LinkText>
        </NavLink>
        <NavLink to="/development">
          <BsTag size={28} color="#9CA3AF" />
          <LinkText>TAGS</LinkText>
        </NavLink>
        <NavLink to="/development">
          <IoMdPeople size={28} color="#9CA3AF" />
          <LinkText>TEAM</LinkText>
        </NavLink>
        <NavLink to="/development">
          <MdFace size={28} color="#9CA3AF" />
          <LinkText>CLIENTS</LinkText>
        </NavLink>
        <NavLink to="/development">
          <FaCog size={28} color="#9CA3AF" />
          <LinkText>SETTINGS</LinkText>
        </NavLink>
      </SidePanelEl>
    </SidePanelCon>

  );
};

export default SidePanel;

