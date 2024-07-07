import { FC, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface SubjectGrade {
  id: number;
  subjectName: string;
  commandName: string;
  rating: number;
  passed: number;
}

export const StudentSubjectGradesPage: FC = () => {
  const [subjectGradesTableData] = useState<SubjectGrade[]>([
    {
      id: 1,
      subjectName: "Computer Science",
      commandName: "Algorithms",
      rating: 95,
      passed: 1,
    },
    {
      id: 2,
      subjectName: "Mathematics",
      commandName: "Calculus",
      rating: 88,
      passed: 1,
    },
    {
      id: 3,
      subjectName: "Physics",
      commandName: "Mechanics",
      rating: 76,
      passed: 1,
    },
    {
      id: 4,
      subjectName: "Literature",
      commandName: "Modern Literature",
      rating: 67,
      passed: 0,
    },
    {
      id: 5,
      subjectName: "Chemistry",
      commandName: "Organic Chemistry",
      rating: 82,
      passed: 1,
    },
    {
      id: 6,
      subjectName: "Biology",
      commandName: "Genetics",
      rating: 90,
      passed: 1,
    },
    {
      id: 7,
      subjectName: "History",
      commandName: "World History",
      rating: 72,
      passed: 1,
    },
    {
      id: 8,
      subjectName: "Art",
      commandName: "Renaissance Art",
      rating: 85,
      passed: 1,
    },
    {
      id: 9,
      subjectName: "Physical Education",
      commandName: "Fitness Training",
      rating: 91,
      passed: 1,
    },
    {
      id: 10,
      subjectName: "Economics",
      commandName: "Microeconomics",
      rating: 79,
      passed: 1,
    },
  ]);

  return (
    <div className="subject-grades-page w:full">
      <DataTable value={subjectGradesTableData}>
        <Column
          field="id"
          header="#"
          sortable
        />

        <Column
          field="subjectName"
          header="Названия предмета"
          sortable
        />

        <Column
          field="commandName"
          header="Ваша команда"
          sortable
        />

        <Column
          field="rating"
          header="Ваша отценка"
          sortable
          body={(body) => <div>{body.rating}/100</div>}
        />

        <Column
          field="passed"
          header="Посещено"
          sortable
        />
      </DataTable>
    </div>
  );
};
