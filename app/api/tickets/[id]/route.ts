import Ticket from "@/app/(models)/tickets";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Eliminado" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Poblema al intentar eliminar el ticket", error },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const ticket = await Ticket.findOne({ _id: params.id });
    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Poblema al intentar obtener el ticket", error },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    const ticketUpdated = await Ticket.findByIdAndUpdate(id, { ...ticketData });
    return NextResponse.json({ ticketUpdated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Poblema al intentar actualizar el ticket", error },
      { status: 500 }
    );
  }
}
