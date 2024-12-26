import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AppForm from "@/components/CustomForm/AppForm";
import AppInput from "@/components/CustomForm/AppInput";
import Swal from "sweetalert2";
import axiosInstance from "@/api/axiosInstance";
import AppSelect from "@/components/CustomForm/AppSelect";
import { contentTypes } from "./lesson.constant";
import Loader from "@/components/Loader/Loader";

// Fetch lesson by ID
const fetchLessonById = async (lessonId: string) => {
  const response = await axiosInstance.get(`/lessons/${lessonId}`);
  return response?.data?.data;
};

// Update lesson function
const updateLesson = async (
  lessonId: string,
  data: { name: string; description: string; type: string; content: string }
) => {
  const response = await axiosInstance.patch(
    `/lessons/update-lesson/${lessonId}`,
    data
  );
  return response?.data;
};

const EditLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch lesson details
  const {
    data: lesson,
    isLoading: isLoadingLesson,
    error: lessonError,
  } = useQuery({
    queryKey: ["lesson", lessonId],
    queryFn: () => fetchLessonById(lessonId!),
    enabled: !!lessonId,
  });

  const mutation = useMutation({
    mutationFn: (data: {
      name: string;
      description: string;
      type: string;
      content: string;
    }) => updateLesson(lessonId!, data),
    onSuccess: () => {
      Swal.fire("Updated!", "Lesson updated successfully!", "success");
      queryClient.invalidateQueries({ queryKey: ["lessons"] });
      navigate("/dashboard/admin/lesson-management/all-lessons");
    },
    onError: () => {
      Swal.fire("Error!", "Failed to update lesson.", "error");
    },
  });

  const onSubmit = (data: {
    name: string;
    description: string;
    type: string;
    content: string;
  }) => {
    mutation.mutate(data);
  };

  if (isLoadingLesson) {
    <Loader />;
  }
  if (lessonError) return <p>Something went wrong...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Lesson</h1>
      <AppForm
        // Add schema validation for editing lessons
        onSubmit={onSubmit}
        defaultValues={{
          name: lesson?.name || "",
          description: lesson?.description || "",
          type: lesson?.type || "",
          content: lesson?.content || "",
        }}
        buttonText="Update Lesson"
      >
        {/* Name */}
        <AppInput
          name="name"
          label="Lesson Name"
          placeholder="Enter lesson name"
        />

        {/* Description */}
        <AppInput
          name="description"
          label="Description"
          placeholder="Enter description"
        />

        {/* Type */}
        <AppSelect
          name="type"
          label="Type"
          placeholder="Select the type of your lesson"
          options={contentTypes.map((value) => ({
            value: value.value,
            label: value.label,
          }))}
        />

        {/* Content URL */}
        <AppInput
          name="content"
          label="Content URL"
          placeholder="Enter content URL"
        />
      </AppForm>
    </div>
  );
};

export default EditLesson;
