export const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Fallo al obtener los tickets", error);
  }
};

export const formatTime = (time: string) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const date = new Date(time);
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
};

export const getTicketById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: "no-store",
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Error al obtener el ticket");
  }
  return res.json();
};
