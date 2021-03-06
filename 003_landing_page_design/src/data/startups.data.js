const STARTUPS_DATA = {
  items: [
    {
      id: 1,
      companyLogo:
        "https://cdn.kustomerhostedcontent.com/media/5aecd7338a0607779d1ec9cc/9bbb8cdc9a35c4502fd1bdaf7cea367e.png",
      companyName: "flickr",
      companyDetails: "Lorem ipsum dolor sit amet consectetur.",
      companyCategory: "Design",
      location: "Couva",
      openings: "4",
    },
    {
      id: 2,
      companyLogo:
        "https://www.shareicon.net/data/512x512/2016/07/09/118745_logo_512x512.png",
      companyName: "dribbble",
      companyDetails: "Lorem ipsum dolor sit amet consectetur.",
      companyCategory: "SWE",
      location: "Arima",
      openings: "4",
    },
    {
      id: 3,
      companyLogo: "https://cdn.worldvectorlogo.com/logos/behance-2.svg",
      companyName: "Behance",
      companyDetails: "Lorem ipsum dolor sit amet consectetur.",
      companyCategory: "Dev",
      location: "Glencoe",
      openings: "4",
    },
    {
      id: 4,
      companyLogo:
        "data:image/png;base64,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",
      companyName: "AlgoExpert.io",
      companyDetails: "Lorem ipsum dolor sit amet consectetur.",
      companyCategory: "Design",
      location: "Arima",
      openings: "4",
    },
  ],
};

export default STARTUPS_DATA;
