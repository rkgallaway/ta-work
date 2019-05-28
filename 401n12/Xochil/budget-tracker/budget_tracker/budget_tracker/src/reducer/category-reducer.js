export default ( state=[], {type, payload}) => {
  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state + payload];
    case 'CATEGORY_UPDATE':
      //use map here
      return null
    case 'CATEGORY_DESTROY':
      //use filter here
      return null;
    default:
      return state;
  }
};