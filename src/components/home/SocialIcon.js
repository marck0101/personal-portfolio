import React from 'react';

const SocialIcon = React.memo(function SocialIcon({ link, icon, label }) {
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <span aria-hidden="true">{icon}</span>
    </a>
  );
});

export default SocialIcon;
