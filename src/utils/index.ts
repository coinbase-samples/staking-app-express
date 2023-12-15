export const checkProtocolParentRegex = (parentInput: string) => {
  let regex = new RegExp("protocols/[^/]+");
  return regex.test(parentInput);
};

export const checkProtocolNetworkParentRegex = (parentInput: string) => {
  let regex = new RegExp("protocols/[^/]+/networks/[^/]+");
  return regex.test(parentInput);
};
