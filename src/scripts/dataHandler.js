export default class DataHandler {
    isEmpty = str => {
        if (str == "" || str == null) {
          return true;
        } 
        return false;
    };
}