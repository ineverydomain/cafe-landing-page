import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}