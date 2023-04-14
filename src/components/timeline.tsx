import React from "react";

interface TimelineProps {
  title: string;
  time: string;
}

const TimelineItem = ({ title, time: subtitle }: TimelineProps) => {
  return (
    <li>
      <div className="right_content">
        <h2 className="text-[#00bdff]">{title}</h2>
      </div>
      <div className="left_content">
        <h3 className="text-gray-700 dark:text-white">{subtitle}</h3>
      </div>
    </li>
  );
};

const Timeline = ({ points }: any) => {
  const pointers = points
    ? points.map(({ title, time: subtitle }: TimelineProps) => (
        <TimelineItem key={title} title={title} time={subtitle} />
      ))
    : "";

  return (
    <div className="timeline">
      <ul>
        {pointers}
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default Timeline;
