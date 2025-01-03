const Notifications = ({ companies }) => {
    const overdueCompanies = companies.filter((c) => c.overdue);
    const todayDueCompanies = companies.filter(
      (c) =>
        new Date(c.nextCommunication.date).toDateString() ===
        new Date().toDateString()
    );

    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Notifications</h1>
        <h2 className="text-lg">Overdue Communications</h2>
        <ul>
          {overdueCompanies.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
        <h2 className="text-lg mt-4">Today's Communications</h2>
        <ul>
          {todayDueCompanies.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Notifications;
