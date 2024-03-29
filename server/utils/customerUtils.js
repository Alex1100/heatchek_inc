const standardizePhoneNumber = (mobileNumber) => {
  const splitPhone = mobileNumber.length === 10;
  const splitPhoneWithCountryCode = mobileNumber.length === 11;
  let formattedNumber = '';

  if (splitPhone) {
    formattedNumber = `+1 (${mobileNumber.slice(0, 3)}) ${mobileNumber.slice(3, 6)}-${mobileNumber.slice(6)}`;
  } else if (splitPhoneWithCountryCode) {
    formattedNumber = `+${mobileNumber.slice(0, 1)} (${mobileNumber.slice(1, 4)}) ${mobileNumber.slice(4)}`;
  } else {
    return mobileNumber;
  }

  return formattedNumber;
};

module.exports = {
  standardizePhoneNumber,
};