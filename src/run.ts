import { ComponentsManager } from 'componentsjs';

const account = async () => {
  const manager = await ComponentsManager.build({
    mainModulePath: __dirname, // Path to your npm package's root
  });
  await manager.configRegistry.register('myconfig.jsonld');
  const myInstance = await manager.instantiate('urn:testingts:myInstance');
};
account();