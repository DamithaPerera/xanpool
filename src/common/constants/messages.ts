const SUCCESS_MESSAGES = {
  EXCHANGE_RATES: {
    message: 'Exchange rates are successfully retrieved',
  },
  NO_DATA_FOUND: {
    message: 'No data found',
  },
};

const ERROR_MESSAGE = {
  AXIOS_ERROR: {
    message: 'Axios Error',
  },
};

const DESCRIPTION_MESSAGE = {
  BASE: {
    message:
      'Enter the three-letter currency code of your preferred base currency',
  },
  SYMBOLS: {
    message:
      'Enter a list of comma-separated currency codes to limit output currencies',
  },
  SUMMARY: {
    message:
      'Returns real-time exchange rate data updated every 60 minutes, every 10 minutes or every 60 seconds',
  },
};

export { SUCCESS_MESSAGES, ERROR_MESSAGE, DESCRIPTION_MESSAGE };
