export const checkProtocolParentRegex = (parentInput: string) => {
  var regex = new RegExp("protocols/[^/]+");
  return regex.test(parentInput);
};

export const checkProtocolNetworkParentRegex = (parentInput: string) => {
  var regex = new RegExp("protocols/[^/]+/networks/[^/]+");
  return regex.test(parentInput);
};
