import { IEmpolyee } from "./Employee.type";
import "./EmployeeList.style.css";

type Props = {
    list: Iemployee[];
};

const EmployeeList = (props: props) => {
    const { list } = props;
    return [
        <div>
            employee list
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                {list.map[employee] => {
                    console.log[employee];
       return {
       <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
    
];
       }
            </table>
        </div>
    ];
};

export default EmployeeList;