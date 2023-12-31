"use client";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const TicketForm = () => {
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
    // 👇️ prevent page refresh
    event.preventDefault();
    const res = await fetch("api/ickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
    });
    if (!res.status) {
      throw new Error("Fallo en crear ticket.");
    }
    router.refresh();
    router.push("/");
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex jsutify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Crea tu ticket</h3>
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
          <label>1</label>
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
        <input type="submit" className="btn" value={"Crear ticket"} />
      </form>
    </div>
  );
};

export default TicketForm;
