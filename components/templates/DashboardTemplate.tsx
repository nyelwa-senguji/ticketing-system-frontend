import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import Header from "../modules/Header/header";
import Navigation from "../modules/Navigation/navigation";
import SearchPanel from "../modules/Panel/searchPanel";

export default function DashboardTemplate() {
  // const { data: employees } = useSWR("/api/employees", fetcher);

  return (
    <>
      <Header subheader="Home" />
      <Navigation />
      <SearchPanel />
    </>
  );
}
