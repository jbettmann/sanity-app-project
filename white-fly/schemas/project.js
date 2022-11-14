export default {
  name: "project", // name to find with fetch _type == ""
  title: "Project", // name that shows on Sanity studio
  type: "document", // the type of schema
  fields: [
    // options when adding things like Title, Author, Img etc..
    {
      name: "title", // options that shows on Sanity studio
      type: "string",
    },
    {
      name: "date", // options that shows on Sanity studio
      type: "datetime",
    },
    {
      name: "place", // options that shows on Sanity studio
      type: "string",
    },
    {
      name: "description", // options that shows on Sanity studio
      type: "text",
    },
    {
      name: "projectType", // name to find in fetch
      title: "Project type", // options that shows on Sanity studio
      type: "string",
      options: {
        list: [
          // dropdown options in Sanity to pick from
          { value: "personal", title: "Personal" },
          { value: "client", title: "Client" },
          { value: "school", title: "School" },
        ],
      },
    },
    {
      // Link field to direct to url
      name: "link",
      type: "url",
    },
    {
      // adds tags
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
