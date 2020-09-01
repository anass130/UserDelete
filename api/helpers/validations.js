
import env from '../env';

const isEmpty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }
  if(typeof input == "string" && input.replace(/\s/g, '').length) {
    return false;
  }
  if(typeof input == "object"){
    if (input == null || input == '' || input.length == 0)
      return true;
    else
      return false;
  }
  return false;
};


export {
isEmpty,
};
