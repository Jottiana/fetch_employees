interface EmployeeCardProps {
  employee: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
  };
}
 

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <figure className='DisplayEmployee'>
      <img src={employee.picture.medium} alt={employee.name.first} />
      <figcaption>
        <strong>{employee.name.first} {employee.name.last}</strong>
          <p>{employee.email}</p>
      </figcaption>
    </figure>
  );
}

export default EmployeeCard;