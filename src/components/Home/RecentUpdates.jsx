import React, { useEffect, useState } from "react";
import HeaderStyleTwo from "../App/HeaderStyleTwo";
import UpdateCard from "./UpdateCard";
const fakeAxiosCall = () => {
  return {
    data: [
      {
        id: 1,
        title: "Local Government Fiances",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu massa magna.",
        published: "2020-01-02T21:36:44.000Z",
        link: "http://www.google.com",
        flag: "updated",
      },
      {
        id: 2,
        title: "Transportaton Network Carrier Maps",
        published: "2020-01-02T21:36:44.000Z",
        link: "http://www.google.com",
        flag: "new",
      },
      {
        id: 3,
        title:
          "BEA Long-Range General Fund Revenue Plam fpr FY2019-20 ot FY 2022-23",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus vitae mauris quis luctus. Etiam pharetra est dui, vel molestie arcu maximus quis. Pellentesque magna nunc, vestibulum et purus non,",
        published: "2019-12-16T21:36:44.000Z",
        link: "http://www.google.com",
        flag: "updated",
      },
      {
        id: 4,
        title: "Budget Development",
        published: "2019-12-16T21:36:44.000Z",
        link: "http://www.google.com",
        flag: "new",
      },
      {
        id: 5,
        title: "Novemember 2019 General Fund Revenue Digest",
        published: "2019-12-13T21:36:44.000Z",
        link: "http://www.google.com",
        flag: "new",
      },
    ],
  };
};

export default function RecentUpdates() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fakeAxiosCall();
      setData(res.data);
    };

    getData();
  }, []);
  return (
    <div>
      <HeaderStyleTwo label="Recent Updates" />
      {data
        ? data.map((update) => {
            return <UpdateCard update={update} key={update.id} />;
          })
        : null}
    </div>
  );
}
