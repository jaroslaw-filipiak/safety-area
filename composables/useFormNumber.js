export const useFormNumber = () => {
  const filePath = import.meta.url;
  const componentName = filePath.split('/').pop().split('.')[0];
  const getComponentNumber = (componentName) => {
    const regex = /\d+/;
    const match = componentName.match(regex);
    return match ? parseInt(match[0]) : null;
  };
  const ID = getComponentNumber(componentName);

  return componentName;
};
