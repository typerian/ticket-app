import TiketCard from "./components/ticket-card";
import { getTickets } from "./lib/data";

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

const Home = async () => {
  const { allTickets } = await getTickets();
  const uniquedCategories = [
    ...new Set(
      allTickets.map(({ category }: { category: string }) => category)
    ),
  ];
  console.log({ allTickets });
  return (
    <div className="p-5">
      <div>
        {allTickets &&
          uniquedCategories.map((uniquedCategory, indexCat) => (
            <div className="mb-4" key={indexCat}>
              <h2>{uniquedCategory as string}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {allTickets
                  .filter(
                    (ticket: TicketsTypes) =>
                      ticket.category === uniquedCategory
                  )
                  .map((filtTicket: TicketsTypes, _index: number) => (
                    <TiketCard id={_index} key={_index} ticket={filtTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
