import React from "react";
import DeleteBlock from "./delete-block";
import PriorityDisplay from "./priority-display";
import ProgressDisplay from "./progress-display";
import StatusDisplay from "./status-display";

const TiketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Titulo</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Esto es una description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">31/12/23 16:00</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end ">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TiketCard;
