import React from "react";
import { CardCategory } from "../../components/CardCategory";
import { Header } from "../../components/Header";
import { useQuery } from "react-query";
import { BusinessCategoriesApi } from "../../utils/API";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const navigate = useNavigate();
  const BusinessCategories = useQuery(
    ["BusinessCategories"],
    () => BusinessCategoriesApi(),
    {
      refetchOnWindowFocus: false,
      retry: 2,
      refetchOnMount: true,
      cacheTime: 1,
    }
  );
  return (
    <div className="h-screen bg-[#f2f2f2]">
      <Header isShowSearch={false} />

      {BusinessCategories.isLoading ? (
        <Loading />
      ) : BusinessCategories.isSuccess ? (
        BusinessCategories.data.data.map(
          (item: any, index: any) => {
            return (
              <CardCategory
                key={index}
                onClick={() =>
                  navigate("/user/shops", {
                    state: { idCategory: item._id },
                  })
                }
                Name={item.Name}
              />
            );
          }
        )
      ) : null}
    </div>
  );
};
