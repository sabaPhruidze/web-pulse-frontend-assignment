import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const SectionCard = ({ title, children }: Props) => {
  return (
    <section className="bg-pulse-border/30 my-5 p-5 border-2 border-pulse-border rounded-lg">
      <div>
        <h2 className="font-bold text-pulse-text">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default SectionCard;
