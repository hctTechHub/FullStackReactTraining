
import Button from './Button.jsx';

const ListTable = (props) => {

        return(
            <table>
                

                <tbody>
                    {props.listContacts.map((el,i) => 
                        <tr key={i}>
                            <td>{el.name}</td>
                            <td><Button btnText="Edit"/></td>
                            <td><Button btnText="Delete"/></td>
                            <td><Button btnText="View"  /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
}


export default ListTable