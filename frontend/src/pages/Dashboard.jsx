import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import Footer from "../components/Footer";

export const Dashboard = () => {
  return (
    <div className="h-100vh">
      <Appbar />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
      <Footer />
    </div>
  );
};
