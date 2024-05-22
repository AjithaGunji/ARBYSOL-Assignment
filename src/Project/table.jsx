import './table.css'
export const Table=()=>{
    return(
        <div>
       <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Enrollment Type</th>
                <th>Reffering Provider</th>
                <th>Gender</th>
                <th>Address</th>
                <th>DOB</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    ESWAR
                </td>
                <td>
                    Type1 
                </td>
                <td>
                    Provider1
                </td>
                <td>
                    male
                </td>
                <td>
                    Viziayanagaram
                </td>
                <td>24/09/2002</td>
             </tr>
        </tbody>
       </table>
        </div>
    )
}