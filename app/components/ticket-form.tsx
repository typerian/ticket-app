"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TicketsTypes {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  createdAt: string;
}

const TicketForm = ({ ticket }: { ticket: TicketsTypes }) => {
  const editMode = ticket._id === "new" ? false : true;

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editMode) {
      const res = await fetch(
        `http://localhost:3000/api/tickets/${ticket._id}`,
        {
          method: "PUT",
          body: JSON.stringify({ formData }),
        }
      );
      if (!res.ok) {
        throw new Error("Fallo en actualizar el ticket.");
      }
    } else {
      const res = await fetch("http://localhost:3000/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Fallo en crear ticket.");
      }
    }
    router.refresh();
    router.push("/");
  };
  if (editMode) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{editMode ? "Actualizar Ticket" : "Crear Ticket"}</h3>
        <label>Titulo</label>
        <input
          type="text"
          id="title"
          name="title"
          required={true}
          onChange={handleChange}
          value={formData.title}
        />
        <label>Descripción</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          required={true}
          onChange={handleChange}
          rows={5}
        />
        <label>Categoria</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value={"Hardware Problem"}>Problema de Hardware</option>
          <option value={"Software Problem"}>Problema de Software</option>
          <option value={"Project"}>Proyecto</option>
        </select>
        <label>Prioridad</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progreso</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={"0"}
          max={"100"}
          onChange={handleChange}
        />
        <label>Estado</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value={"not started"}>No inciado</option>
          <option value={"started"}>Inciado</option>
          <option value={"done"}>Finalizado</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={editMode ? "Actualizar Ticket" : "Crear Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
