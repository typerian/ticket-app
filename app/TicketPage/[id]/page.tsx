import TicketForm from "@/app/components/ticket-form";
import { getTicketById } from "@/app/lib/data";

const TicketPage = async ({ params }: { params: { id: string } }) => {
  const editMode = params.id === "new" ? false : true;
  let updateTicketData = {
    _id: "",
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
    createdAt: "",
  };

  if (editMode) {
    const { ticket } = await getTicketById(params.id);
    updateTicketData = ticket;
  } else {
    updateTicketData = { ...updateTicketData, _id: "new" };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
