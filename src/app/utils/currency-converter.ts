const poundGBLocale = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const convertToGBP = (value: number) => poundGBLocale.format(value);
export default convertToGBP;
