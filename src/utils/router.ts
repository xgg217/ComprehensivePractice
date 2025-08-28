import routerObj from "@/router/index";
import type { ICardItem } from "@/types/index";
import type { RouteRecordRaw } from "vue-router";

// const allRoutes = router.getRoutes();
// console.log(routerObj.options.routes);

// 获取全部路由
export const getAllRoutes = (whitePathlist: string[]) => {
  // const allRoutes = routerObj.getRoutes();

  const arr = routerObj.options.routes.filter(item => {
    // 过滤掉白名单的路由
    // return !whitePathlist.includes(item.path);
    return item.meta?.isCardList;
  });

  // 遍历需要处理的路由
  return getItem(arr);
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
  console.log(row);

  if (!row || !row.children) {
    return [];
  }

  const arr = row.children.filter(item => {
    // 过滤掉白名单的路由
    return !whitePathlist.includes(item.path);
  });
  console.log(arr);

  return getItem(arr);

  // .filter(item => {
  //   // 过滤掉白名单的路由
  //   return !whitePathlist.includes(item.path);
  // });

  // const arr = routerObj.options.routes
  //   .filter(item => {
  //     // 过滤出要显示的指定路由
  //     // 获取全部路由
  //     if (paths.length === 0) {
  //       return true;
  //     }
  //     return paths.includes(item.path);
  //   })
  //   .filter(item => {
  //     // 过滤掉白名单的路由
  //     return !whitePathlist.includes(item.path);
  //   });
  // .map(item => {
  //   const { meta, name, path } = item;
  //   const obj: ICardItem = {
  //     title: (meta.title || "") as string,
  //     name: (name as string) || "",
  //     remark: (meta.remark || "") as string,
  //     path,
  //   };
  //   return obj;
  // });
  // console.log(arr);

  // return getItem(arr[0].children);
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
