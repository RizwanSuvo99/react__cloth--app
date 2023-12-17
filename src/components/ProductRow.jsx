/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

export default function ProductRow(props) {
  const {
    pro__name,
    pro__id,
    pro__price,
    pro__quantity,
    pro__description,
  } = props.cloth;

  return (
    <tr>
      <td>{pro__name}</td>
      <td>{pro__id}</td>
      <td>{pro__price}</td>
      <td>{pro__quantity}</td>
      <td>{pro__description}</td>
      <td onClick={() => props.handleDelete(pro__id)} className="delete-btn">
        <MdDelete color="red" />
      </td>
    </tr>
  );
}
