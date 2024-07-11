// import * as Yup from "yup";

// export const validationSchema = Yup.object().shape({
//   type: Yup.string().required("Type is required"),
//   projectTitle: Yup.string().when("type", {
//     is: (value) => value === "DevOps/Release Engineering",
//     then: Yup.string().required("Project Title is required"),
//     otherwise: Yup.string()
//   }),
//   category: Yup.string().required("Category is required"),
//   subcategory: Yup.string().required("Subcategory is required"),
//   subject: Yup.string().required("Subject is required"),
//   description: Yup.string().required("Description is required"),
//   priority: Yup.string().required("Priority is required"),
// });
