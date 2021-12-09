import { useEffect, useState } from "react";
import { ListItems } from "../services/api";
import { ConfigService } from "../services/config";

export const UseList = () => {
  const [listItems, setListItems] = useState();
  const [loadList, setLoadList] = useState(false);

  const urlBase = ConfigService.urlBase;

  const getListItems = async (url) => {
    try {
      const data = await ListItems(url || urlBase);
      setListItems(data);
      setLoadList(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListItems();
  }, []);

  console.log(listItems, loadList);

  return {
    getListItems,
  };
};
