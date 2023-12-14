import { useEffect, useState } from "react";
import axios from "axios";

interface Item {
  id: number;
  features: {
    weight: number;
  };
}

export default function InvalidApiResponse() {
  const [item, setItem] = useState<Item>();
  useEffect(() => {
    axios.get<Item>("/item.json").then((response) => {
      setItem(response.data);
    });
  }, []);

  if (!item) {
    return <div>Item seems to be missing</div>;
  }

  return <div>Item weight is: {item.features.weight}</div>;
}
