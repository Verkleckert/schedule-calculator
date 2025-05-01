import { toast } from "sonner";

export function showToast(options: {
  title?: string;
  description?: string;
  type?: "success" | "error" | "info" | "warning";
}) {
  const { title, description, type = "info" } = options;

  switch (type) {
    case "success":
      toast.success(title, {
        description,
      });
      break;
    case "error":
      toast.error(title, {
        description,
      });
      break;
    case "warning":
      toast.warning(title, {
        description,
      });
      break;
    default:
      toast(title, {
        description,
      });
  }
}
