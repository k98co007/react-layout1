import React from 'react';

interface CardItemProps {
  title: string;
  name: string;
  description: string;
  tags: string[];
}

const CardItem: React.FC<CardItemProps> = ({ title, name, description, tags }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{name}</p>
      <p>{description}</p>
      {tags.map(tag => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default CardItem;
