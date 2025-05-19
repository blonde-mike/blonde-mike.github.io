interface LayoutRef {
  pages: Page[];
}

interface Page {
  name: string;
  subPages?: SubPage[];
}

interface SubPage {
  name: string;
}

const layoutRef: LayoutRef = {
  pages: [
    {
      name: "Resume",
      subPages: [
        {
          name: "Experience"
        },
        {
          name: "Skills"
        },
        {
          name: "Education"
        },
        {
          name: "Volunteering"
        }
      ]
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Interests",
      subPages: [
        {
          name: "Running"
        },
        {
          name: "Music"
        },
        {
          name: "Reading"
        },
        {
          name: "Gaming"
        }
      ]
    }
  ]
};

export default layoutRef;
