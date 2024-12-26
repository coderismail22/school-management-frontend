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

export type TTopic = {
  _id: string;
  name: string;
  description: string;
  lessons: string[];
};

export const topicColumns = (
  handleEdit: (id: string) => void,
  handleDelete: (id: string) => void
): ColumnDef<TTopic>[] => [
  {
    accessorKey: "sl",
    header: "SL",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const topic = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-5 w-5">
              <BiDotsVertical className="h-10 w-10" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleEdit(topic._id)}>
              <FaRegEdit className="text-green-700" />
              <p className="text-[12px]">Edit</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDelete(topic._id)}>
              <FaTrash className="text-red-500" />
              <p className="text-[12px]">Delete</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
