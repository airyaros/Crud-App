import { useState } from "react";
import { IEmpolyee, dummyEmployeeList } from "./Employee.type";
import "./Home.style.css"
import EmployeeList from "./EmployeeList";

const Home: React.FC = () => {
    const [employeeList, setEmployeeList] = useState(
      dummyEmployeeList as IEmpolyee[]
);    
  return (
    <div>
     <article className="article-header">
     <header>
      <h1>Crud App </h1>
      </header>
      </article>

      <section className="section-content">
        <div>content</div>
        <EmployeeList />
      </section>
    </div>
  );
};

export default Home;
