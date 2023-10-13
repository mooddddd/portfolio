const getlist = async () => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Period',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    options
  );
  const { results } = await res.json();

  //   return { props: { results } };
  return results;
};

export default getlist;
