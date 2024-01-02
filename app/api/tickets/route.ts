import Ticket from "@/app/(models)/tickets";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Creado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const allTickets = await Ticket.find({});
    return NextResponse.json({ allTickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Hubo un error en la consulta de todos los tickets", error },
      { status: 500 }
    );
  }
}
