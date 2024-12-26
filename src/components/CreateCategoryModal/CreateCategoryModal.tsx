import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

interface CreateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (categoryName: string) => void;
  isLoading?: boolean;
}

const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const [name, setName] = useState("");

  const handleSave = () => {
    if (name.trim()) {
      onSubmit(name); // Pass the category name to the parent
      setName(""); // Reset the input field
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Category</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Category Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className={`bg-blue-50 border border-blue-300 focus:ring focus:ring-blue-300 
              rounded-lg px-4 py-2 shadow-md text-gray-700 
              placeholder-gray-400 hover:shadow-lg transition-all 
              duration-300 ease-in-out 
             
             `}
          />
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={onClose}
            className="text-white bg-gradient-to-tr from-[#6a82fb] to-[#fc5c7d]  hover:from-[#fc5c7d] hover:to-[#6a82fb]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-gradient-to-tr from-[#6a82fb] to-[#fc5c7d]  hover:from-[#fc5c7d] hover:to-[#6a82fb]"
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;
