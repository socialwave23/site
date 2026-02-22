import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PortfolioItem {
  id: string;
  client: string;
  category: string;
  image: string;
  result: string;
}

export interface ClientLogo {
  id: number;
  name: string;
  logoUrl: string;
}