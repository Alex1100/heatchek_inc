const businessEventVariants = ({
  numberOfUnitTypes = 0,
  numberOfDesiredPhotos = 0,
  numberOfDesiredVideos = 0,
  numberOfFloors = 0,
}) => ({
  commercial: {
    sizeLimit: "n/a",
    eventName: "Commercial Basic Service",
    description: "Time of appointment for service.",
    eventLink: "commercial-basic",
    timeZone: "PST",
    dateRange: 60,
    duration: 6,
    reschedulingFee: 1000.00,
    serviceFee: (numberOfFloors * 10000),
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $1000.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that has a total of ${numberOfFloors} floors.
      The final charges will take into consideration
      how many unit types we must service,
      whether or not if any additional services have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    },
  },
  multifamily: {
    sizeLimit: "n/a",
    eventName: "Multifamily Basic Service",
    description: "Time of appointment for service.",
    eventLink: "multifamily-basic",
    eventDuration: 12,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 500.00,
    serviceFee: (numberOfUnitTypes * 1000),
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $500.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that has a total of ${numberOfUnitTypes} floors.
      The final charges will take into consideration
      how many unit types we must service,
      whether or not if any additional services have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    },
  },
  basic: {
    sizeLimit: "2000",
    eventName: "Standard Service <= 2000 sqft",
    description: "Time of appointment for service.",
    eventLink: "standard-2000",
    eventDuration: 4,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 250.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $250.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 450.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 2000 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested such as Drone Aerial
      footage/pictures, 2d/3d Floor Plans, and more.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  fine: {
    sizeLimit: "3500",
    eventName: "Standard Service <= 3500 sqft",
    description: "Time of appointment for service.",
    eventLink: "standard-3500",
    eventDuration: 6,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 250.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $250.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 725.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 3,500 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  premium: {
    sizeLimit: "5999",
    eventName: "Standard Service <= 5999 sqft",
    description: "Time of appointment for service.",
    eventLink: "standard-5999",
    eventDuration: 8,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 250.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $250.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 1100.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 5,999 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  premier: {
    sizeLimit: "9999",
    eventName: "Standard Service <= 9999 sqft",
    description: "Time of appointment for service.",
    eventLink: "standard-9999",
    eventDuration: 12,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 250.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $250.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 1500.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 9,999 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  deluxe: {
    minSize: "10000",
    eventName: "Deluxe Service >= 10000 sqft",
    description: "Time of appointment for service.",
    eventLink: "deluxe-10000",
    eventDuration: 12,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 250.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $250.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 4500.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 10,000 sq ft or more.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  'small-business-basic': {
    sizeLimit: "1000",
    eventName: "Standard Service <= 1000 sqft",
    description: "Time of appointment for service.",
    eventLink: "small-business-basic-basic-1000",
    eventDuration: 4,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 500.00,
    serviceFee: 800.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $500.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 1,000 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  'small-business-fine': {
    sizeLimit: "3500",
    eventName: "Standard Service <= 3500 sqft",
    description: "Time of appointment for service.",
    eventLink: "small-business-fine-3500",
    eventDuration: 6,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 500.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $500.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 1400.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 2,500 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  'small-business-premium': {
    sizeLimit: "5999",
    eventName: "Standard Service <= 5999 sqft",
    description: "Time of appointment for service.",
    eventLink: "small-business-premium-5999",
    eventDuration: 8,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 500.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $500.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 1800.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 4,999 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  'small-business-premier': {
    sizeLimit: "9999",
    eventName: "Standard Service <= 9999 sqft",
    description: "Time of appointment for service.",
    eventLink: "small-business-premier-9999",
    eventDuration: 12,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 500.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $500.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 3000.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 9,999 sq ft or less.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.\n
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    }
  },
  'small-business-deluxe': {
    minSize: "10000",
    eventName: "Deluxe Service >= 10000 sqft",
    description: "Time of appointment for service.",
    eventLink: "small-business-deluxe-10000",
    eventDuration: 12,
    dateRange: 60,
    timeZone: "PST",
    reschedulingFee: 500.00,
    reschedulingPolicy: `
      All scheduled and paid events must be 
      rescheduled prior to one week of the scheduled event.\n
      If we need to reschedule there will be
      a rescheduling fee of $500.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
    `, 
    cancellationPolicy: `
      All scheduled and paid events must be 
      canceled prior to one week of the scheduled event.\n
      Please contact the company at
      heatchekservice@heatchek.io for any additional questions.
      Refunds will take 5 - 10 business days.
    `,
    serviceFee: 5000.00,
    paymentTerms: `
      This is the fee for scheduling and having us
      service a property that is 10000 sq ft or more.
      The final charges will take into consideration
      how many square feet the location has,
      whether or not if any additional services
      have been requested such as Drone Aerial
      footage/pictures, 2d/3d Floor Plans, and more.\n
      The Base service is for the 3d tour rendering/capturing
      via our MatterPort Pro 2 camera serviced
      by one of our Field Specialists.
      All pictures, obj files and videos will be property
      belonging to HeatChek Inc..
      We reserve the right to use, edit, and distribute the
      videos, obj files and pictures taken during the 
      time of our service, however we may choose.
      All agreements are final unless, stated otherise by HeatChek Inc..
    `,
    inviteeQuestions: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      location: {
        required: true,
      },
      additionalDetails: {
        required: false,
        defaultText: `
          Please share anything that will help prepare
          for our meeting. That includes the location
          of the property, your name,
          number, email, etc..
        `,
      }
    },
  },
});

const businessTemplates = {
  stripeInvoiceFooter: `
  This is the fee for scheduling and having us service a property.

  The final charges will take into consideration how many square feet the location has, whether or not if any additional services have been requested such as Drone Aerial footage/pictures, 2d/3d Floor Plans, and more.
  
  The Base service is for the 3d tour rendering/capturing via our MatterPort Pro 2 camera serviced by one of our Field Specialists and hosting of the digital content for up to one year.
  
  All cancelation requests must be made prior to 3 days (72 hours) of the scheduled service event.
  
  If we need to reschedule there will be a variable rescheduling fee based on the services we were to provide and the size of the subject property.
  
  To view the rescheduling fees please visit:
  https://www.heatchek.io/rescheduling-policy
  
  Please contact the company for any additional questions.
  
  heatchekservice@heatchek.io
  `,
  defaultMemo: `
  Thanks for your business!

  We look forward to working with you.
  `,
}


module.exports = {
  businessEventVariants,
}
