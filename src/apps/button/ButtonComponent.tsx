import React, { useState } from "react";
import { InoButton } from "ino-ui-tv";
import { toast } from "ino-ui-tv";

const ButtonComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttons = [
    {
      index: 0,
      title: "Primary Button",
      variant: "primary",
      onClick: (_e: any, index: number) => {
        toast.success(`Button ${index} clicked, Event name: ${_e.type}`);
      },
      onRight: () => setActiveIndex(1),
    },
    {
      index: 1,
      title: "Secondary Button",
      variant: "secondary",
      onClick: (_e: any, index: number) => {
        toast.success(`Button ${index} clicked, Event name: ${_e.type}`);
      },
      onLeft: () => setActiveIndex(0),
      onRight: () => setActiveIndex(2),
    },
    {
      index: 2,
      title: "Danger Button",
      variant: "danger",
      onClick: (_e: any, index: number) => {
        toast.success(`Button ${index} clicked, Event name: ${_e.type}`);
      },
      onLeft: () => setActiveIndex(1),
      onRight: () => setActiveIndex(3),
    },
    {
      index: 3,
      title: "Outline Button",
      variant: "outline",
      onLeft: () => setActiveIndex(2),
      onClick: (_e: any, index: number) => {
        toast.success(`Button ${index} clicked, Event name: ${_e.type}`);
      },
    },
  ];

  return (
    <div className="flex gap-4">
      {buttons.map(({ index, title, variant, onClick, onLeft, onRight }) => (
        <InoButton
          key={index}
          index={index}
          isActive={activeIndex === index}
          variant={variant as any}
          onClick={onClick}
          onLeft={onLeft}
          onRight={onRight}
        >
          {title}
        </InoButton>
      ))}
    </div>
  );
};

export default ButtonComponent;
