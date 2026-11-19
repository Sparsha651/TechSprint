import Navbar from "../../components/common/navbar";
import LeadRoleSelection from "../../components/leads/LeadRoleSelection";
import "./leads.css";

export default function LeadsPage() {
  return (
    <>
      <main className="leads-page">
        <LeadRoleSelection />
      </main>
      <Navbar />
    </>
  );
}