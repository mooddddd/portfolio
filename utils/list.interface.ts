interface List {
  url: any;
  properties: Properties;
  cover: Cover;
}

interface Cover {
  file: any;
  type: string;
  external: {
    url: string;
  };
}

interface Properties {
  Position: any;
  Description: {
    id: string;
    type: string;
    rich_text: {
      type: string;
      text: {
        content: string;
        link: any;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: any;
    }[];
  };
  Github: {
    id: string;
    type: string;
    url: string;
  };
  Period: {
    id: string;
    type: string;
    date: {
      start: string;
      end: string;
      time_zone: any;
    };
  };
  Skills: {
    id: string;
    type: string;
    multi_select: {
      id: string;
      name: string;
      color: string;
    }[];
  };
  Title: {
    id: string;
    type: string;
    title: {
      type: string;
      text: {
        content: string;
        link: any;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: any;
    }[];
  };
}
