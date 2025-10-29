import translations from "./zh";

function customTranslate(template: string, replacements?: Record<string, string>) {
  replacements = replacements || {};

  // ---- 大小写不敏感查找函数 ----
  function findTranslation(key: string): string | undefined {
    // @ts-ignore
    if (translations[key]) return translations[key];

    // 忽略大小写匹配
    const lowerKey = key.toLowerCase();
    for (const k in translations) {
      if (k.toLowerCase() === lowerKey) {
        // @ts-ignore
        return translations[k];
      }
    }
    return undefined;
  }

  // Translate
  template = findTranslation(template) || template;

  // Replace
  return template.replace(/{([^}]+)}/g, function (_, key) {
    let str = replacements[key];
    if (
      // @ts-ignore
      translations[replacements[key]] !== null &&
      // @ts-ignore
      translations[replacements[key]] !== "undefined"
    ) {
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      // @ts-ignore
      str = translations[replacements[key]];
      // eslint-disable-next-line no-mixed-spaces-and-tabs
    }
    return str || "{" + key + "}";
  });
}

const customTranslateModule = {
  translate: ["value", customTranslate],
};

export default customTranslateModule;
