type studentProps = {
  student: {
    name: string;
    age: number;
    grade: string;
  }[];
};

export const DemoUser = ({ student }: studentProps) => {
  return (
    <div>
      <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
        {student.map((singleStudent, index) => {
          const { name, age } = singleStudent;
          return (
            <div
              style={{ display: "flex", alignContent: "center" }}
              key={index}
            >
              <p>{name}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
