import React from "react";
import DeleteBlock from "./delete-block";
import PriorityDisplay from "./priority-display";
import ProgressDisplay from "./progress-display";
import StatusDisplay from "./status-display";
import { formatTime } from "../lib/data";
import Link from "next/link";

interface TicketsTypes {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: boolean;
  createdAt: string;
}

const TiketCard = ({ ticket, id }: { ticket: TicketsTypes; id: number }) => {
  return (
    <div className="cursor-pointer flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTime(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end ">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TiketCard;
