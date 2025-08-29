import routerObj from "@/router/index";
import type { ICardItem } from "@/types/index";
import type { RouteRecordRaw } from "vue-router";

// 获取全部路由
export const getAllRoutes = () => {
  // const allRoutes = routerObj.getRoutes();
  console.log(routerObj.options.routes);

  const arr = routerObj.options.routes.filter(item => {
    // 过滤掉白名单的路由
    // return !whitePathlist.includes(item.path);
    return item.meta?.isCardList;
  });

  // 遍历需要处理的路由
  // return getItem(arr);
  return arr.map(item => {
    const { meta, name, path } = item;
    const obj: ICardItem = {
      title: meta!.title,
      name: meta!.pathName as string,
      remark: (meta?.remark || "") as string,
      path,
    };
    return obj;
  });
};

/**
 * 获取指定路由
 * 1.先获取的指定的路由；2.然后再过滤白名单
 * @param paths 要获取的指定路由路径（如果为空数组则表面要获取全部路由）
 * @param whitePathlist 要过滤的白名单路径
 */
export const getRoutes = (paths: string, whitePathlist: string[]) => {
  console.log(paths, whitePathlist, routerObj.options.routes);

  // const allRoutes = routerObj.getRoutes();

  // 找到符合要求的路由;
  const row = routerObj.options.routes.find(item => {
    return paths === item.path;
  });
  // console.log(row);

  if (!row || !row.children) {
    return [];
  }

  console.log(row);

  const arr = row.children
    .filter(item => {
      return item.path !== "";
    })
    .filter(item => {
      // 过滤掉白名单的路由
      return !whitePathlist.includes(item.path);
    });
  // console.log(arr);

  return getItem(arr);
};

const getItem = (arr: RouteRecordRaw[]) => {
  return arr.map(item => {
    const { meta, name, path } = item;
    const obj: ICardItem = {
      title: (meta?.title || "") as string,
      name: (name as string) || "",
      remark: (meta?.remark || "") as string,
      path,
    };
    return obj;
  });
};
