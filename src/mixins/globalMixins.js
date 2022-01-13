export const globalMixins = {
  methods: {
    getUUID: function () {
      return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    deepCopy: function (data) {
      return JSON.parse(JSON.stringify(data));
    },
    routeTo: function (path, payload, query = null) {
      this.$router
        .replace({
          name: path,
          params: payload,
          query: query
        })
        .catch((error) => {
          console.log('error in routing to path : ', path, error);
        });
    },
    // RANDOM DATA GENERATORS
    getRandomString: function (size, includeNumbers = false, onlyNumbers = false) {
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
      let numbers = '0123456789';
      if (includeNumbers) chars += numbers;
      if (onlyNumbers) chars = numbers;
      let charsCount = chars.length - 1;
      let str = '';
      while (size > 0) {
        str += chars[this.getRandomNumber(charsCount)];
        size--;
      }
      return str;
    },
    getRandomNumber: function (max = 0, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
