import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BiDotsVertical } from "react-icons/bi";
import { FaRegEdit, FaTrash } from "react-icons/fa";

export type TTeacher = {
  _id: string;
  teacherName: string;
  email: string;
  salary: number;
  phone: string;
  profileImg: string;
};

export const teacherColumns = (
  handleEdit: (id: string) => void,
  handleDelete: (id: string) => void
): ColumnDef<TTeacher>[] => [
  {
    accessorKey: "sl",
    header: "SL",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "teacherName",
    header: "Name",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-5 w-5">
              <BiDotsVertical className="h-10 w-10" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleEdit(teacher._id)}>
              <FaRegEdit className="text-green-700" />
              <p className="text-[12px]">Edit</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDelete(teacher._id)}>
              <FaTrash className="text-red-500" />
              <p className="text-[12px]">Delete</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
