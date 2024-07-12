import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  projectTitle: Yup.string().test(
    "projectTitle-required",
    "Project title is required",
    function (value) {
      const { type } = this.parent;
      if (type === "DevOps/Release Engineering") {
        return value !== undefined && value !== "";
      }
      return true;
    }
  ),
  category: Yup.string().required("Category is required"),
  subcategory: Yup.string().required("Subcategory is required"),
  subject: Yup.string().required("Subject is required"),
  description: Yup.string().required("Description is required"),
  priority: Yup.string().required("Priority is required"),
  // sendemail: Yup.string().required("sendemail is required"),
});
