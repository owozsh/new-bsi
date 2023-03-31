import LineTo from "react-lineto";
import Card from "./components/Card";
import Column from "./components/Column";
import semesters from "./db/subjects";

export default function Home() {
  return (
    <>
      {semesters.map((semester) => (
        <>
          <Column key={semester.name}>
            {semester.subjects.map((sub) => (
              <Card key={sub.name} color={sub.color}>
                {sub.name}
              </Card>
            ))}
          </Column>
        </>
      ))}
    </>
  );
}
