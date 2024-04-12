import NoData from "@/components/partials/NoData";
import ServerError from "@/components/partials/ServerError";
import TableLoader from "@/components/partials/TableLoader";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import React from "react";
import {
  MdOutlineArchive,
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineRestore,
} from "react-icons/md";
const DepartmentsTable = ({ setIsAdd, setDataEdit }) => {
  const handleEdit = (child) => {
    setIsAdd(true);
    setDataEdit(child);
  };

  let count = 1;
  return (
    <div className=" relative">
      <TableLoader />
      <FetchingSpinner />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Supervisor</th>
            <th>Supervisor Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center ">
            <td colSpan="100%" className="p-10">
              <ServerError />
            </td>
          </tr>
          <tr className="text-center ">
            <td colSpan="100%" className="p-10">
              <NoData />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Accounting</td>
            <td>Virgil Calalang</td>
            <td>virgil.calalang@frontlinebusiness.com.ph</td>
            <td>
              <ul className="flex gap-2">
                <li>
                  <button className="tooltip" data-tooltip="Edit">
                    <MdOutlineEdit size={15} />
                  </button>
                </li>
                <li>
                  <button className="tooltip" data-tooltip="Archive">
                    <MdOutlineArchive size={15} />
                  </button>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Web Development</td>
            <td>Patrick Reyes</td>
            <td>patrick.reyes@frontlinebusiness.com.ph</td>
            <td>
              <ul className="flex gap-2">
                <li>
                  <button className="tooltip" data-tooltip="Edit">
                    <MdOutlineEdit size={15} />
                  </button>
                </li>
                <li>
                  <button className="tooltip" data-tooltip="Archive">
                    <MdOutlineArchive size={15} />
                  </button>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Learning Center Solutions</td>
            <td>Jhonny Dichoso</td>
            <td>jhonny.dichoso@frontlinebusiness.com.ph</td>
            <td>
              <ul className="flex gap-2">
                <li>
                  <button className="tooltip" data-tooltip="Restore">
                    <MdOutlineRestore size={15} />
                  </button>
                </li>
                <li>
                  <button className="tooltip" data-tooltip="Delete">
                    <MdOutlineDelete size={15} />
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentsTable;
