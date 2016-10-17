import React from 'react';

export const Link = ({children, href}) => {
  return <a href={href}>{children}</a>;
}
