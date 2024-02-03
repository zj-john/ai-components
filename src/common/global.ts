export let globalConfig = {
  theme: {
    primaryColor: '#f04142',
    primaryColorTrans: '#1858e933',
  },
};

export function setGlobalConfig(config: any) {
  globalConfig = { ...globalConfig, ...config };
}
