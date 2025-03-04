interface Day {
  helgdag: string;
  datum: string;
  "arbetsfri dag": string;
}

export default async function AboutPage() {
  const response = await fetch("https://sholiday.faboul.se/dagar/v2.1/2025");
  const data = (await response.json()) as { dagar: Day[] };

  const holidays = data.dagar.filter((d) => d.helgdag);

  return (
    <main>
      <h2 className="px-4">About</h2>
      <ul>
        {holidays.map((holiday) => (
          <li
            key={holiday.datum}
            className={holiday["arbetsfri dag"] === "Ja" ? "text-red-600" : ""}
          >
            {holiday.datum} - {holiday.helgdag}
          </li>
        ))}
      </ul>
    </main>
  );
}
