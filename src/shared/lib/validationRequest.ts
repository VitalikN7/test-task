export const validateForm = (title: string, description: string) => {
  const newErrors: { title?: string; description?: string } = {};
  const errorTitle = "Поле обязательно для заполнения";
  if (!title.trim()) newErrors.title = errorTitle;
  if (!description.trim()) newErrors.description = errorTitle;
  return newErrors;
};
