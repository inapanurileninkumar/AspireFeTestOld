export const sampleDataGenerator = {
  methods: {
    getSampleCard: function () {
      let minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() + 2);
      let maxDate = new Date(2030, 11, 1);
      return {
        uuid: this.getUUID(),
        name: this.getRandomString(this.getRandomNumber(15, 8)),
        number: this.getRandomString(16, false, true),
        validThru: this.getRandomTimestamp(minDate.getTime(), maxDate.getTime()),
        cvv: this.getRandomString(3, false, true),
        showCardInfo: false,
        active: true,
        spendLimit: this.getRandomNumber(100000, 5000)
      };
    },
    getRandomTransaction: function (cardUUID) {
      let minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 2);
      let date = new Date();
      return {
        uuid: this.getUUID(),
        time: this.getRandomTimestamp(minDate.getTime(), date.getTime()),
        type: ['credit', 'debit', 'refund'][this.getRandomNumber(2)],
        amount: this.getRandomNumber(1, 350),
        receiver: this.getRandomString(this.getRandomNumber(15, 5)),
        card: cardUUID
      };
    },
    getRandomTimestamp: function (min, max) {
      let date = new Date(this.getRandomNumber(max, min));
      return date.getTime();
    }
  }
};
