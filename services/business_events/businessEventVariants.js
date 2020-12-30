const businessEventVariants = ({
  numberOfUnitTypes = 0,
  numberOfDesiredPhotos = 0,
  numberOfDesiredVideos = 0,
  numberOfFloors = 0,
}) => ({
  commercial: {
    sizeLimit: "n/a",
    basic: {
      eventName: "Commercial Basic Service",
      description: "Time of appointment for service.",
      eventLink: "commercial-basic",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
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
      }
    },
    fine: {
      eventName: "Commercial Fine Service w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "commercial-fine",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1200.00,
      serviceFee: (numberOfFloors * 10000) + Math.min(2500, numberOfDesiredPhotos * 500),
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $1200.\n
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
        service a property that has a total of ${numberOfFloors} floors, and for 
        ${numberOfDesiredPhotos} professionaly edited photos.
        The final charges will take into consideration
        how many floors we must service,
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
      }
    },
    premium: {
      eventName: "Commercial Premium Service w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "commercial-premium",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1800.00,
      serviceFee: (numberOfFloors * 10000) + (numberOfDesiredVideos * 1500),
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $1800.\n
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
        service a property that has a total of ${numberOfFloors} floors, and for 
        ${numberOfDesiredVideos} professionaly edited video.
        The final charges will take into consideration
        how many floors we must service,
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
      }
    },
    deluxe: {
      eventName: "Commercial Deluxe Service w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "commercial-deluxe",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 2000.00,
      serviceFee: (numberOfFloors * 10000) + Math.min(2500, numberOfDesiredPhotos * 500) + (numberOfDesiredVideos * 1500),
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $2000.\n
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
        service a property that has a total of ${numberOfFloors} floors, 
        ${numberOfDesiredPhotos} professionaly edited photos
        and for ${numberOfDesiredVideos} professionaly edited video.
        The final charges will take into consideration
        how many floors we must service,
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
      }
    },
  },
  multifamily: {
    sizeLimit: "n/a",
    basic: {
      eventName: "Multifamily Basic Service",
      description: "Time of appointment for service.",
      eventLink: "multifamily-basic",
      eventDuration: 4,
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
        service a property that has a total of ${numberOfUnitTypes} unit types.
        The final charges will take into consideration
        how many unit types we must service,
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
      }
    },
    fine: {
      eventName: "Multifamily Fine Service w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "multifamily-fine",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 600.00,
      serviceFee: (numberOfUnitTypes * 1000) + Math.min(500, numberOfDesiredPhotos * 100),
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $600.\n
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
        service a property that has a total of ${numberOfUnitTypes} unit types, and for 
        ${numberOfDesiredPhotos} professionaly edited photos.
        The final charges will take into consideration
        how many unit types we must service,
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
      }
    },
    premium: {
      eventName: "Multifamily Premium Service w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "multifamily-premium",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 900.00,
      serviceFee: (numberOfUnitTypes * 1000) + (numberOfDesiredVideos * 800),
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $900.\n
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
        service a property that has a total of ${numberOfUnitTypes} unit types, and for 
        ${numberOfDesiredVideos} professionaly edited video.
        The final charges will take into consideration
        how many unit types we must service,
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
      }
    },
    deluxe: {
      eventName: "Multifamily Deluxe Service w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "multifamily-deluxe",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1000.00,
      serviceFee: (numberOfUnitTypes * 1000) + Math.min(500, numberOfDesiredPhotos * 100) + (numberOfDesiredVideos * 800),
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
        service a property that has a total of ${numberOfUnitTypes} unit types, 
        ${numberOfDesiredPhotos} professionaly edited photos
        and for ${numberOfDesiredVideos} professionaly edited video.
        The final charges will take into consideration
        how many unit types we must service,
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
      }
    },
  },
  basic: {
    sizeLimit: "2000",
    a: {
      eventName: "Standard Service <= 2000 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-2000",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 50.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $50.\n
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
    b: {
      eventName: "Standard Service <= 2000 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-2000-with-drone-pictures",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 100.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $100.\n
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
      serviceFee: 800.00,
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
    c: {
      eventName: "Standard <= 2000 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-2000-with-drone-videos",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 150.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $150.\n
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
      serviceFee: 900.00,
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
    d: {
      eventName: "Standard <= 2000 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-2000-with-drone-content",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 200.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $200.\n
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
      serviceFee: 1000.00,
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
  },
  fine: {
    sizeLimit: "3500",
    a: {
      eventName: "Standard Service <= 3500 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-3500",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 75.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $75.\n
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
        service a property that is 3500 sq ft or less.
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
    b: {
      eventName: "Standard Service <= 3500 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-3500-with-drone-pictures",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 125.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $125.\n
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
      serviceFee: 1025.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 3500 sq ft or less.
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
    c: {
      eventName: "Standard <= 3500 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-3500-with-drone-videos",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 175.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $175.\n
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
      serviceFee: 1125.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 3500 sq ft or less.
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
    d: {
      eventName: "Standard <= 3500 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-3500-with-drone-content",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 225.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $225.\n
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
      serviceFee: 1225.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 3500 sq ft or less.
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
  },
  premium: {
    sizeLimit: "5999",
    a: {
      eventName: "Standard Service <= 5999 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-5999",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 125.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $125.\n
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
        service a property that is 5999 sq ft or less.
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
    b: {
      eventName: "Standard Service <= 5999 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-5999-with-drone-pictures",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 175.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $175.\n
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
      serviceFee: 1300.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 5999 sq ft or less.
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
    c: {
      eventName: "Standard <= 5999 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-5999-with-drone-videos",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 225.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $225.\n
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
        service a property that is 5999 sq ft or less.
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
    d: {
      eventName: "Standard <= 5999 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-5999-with-drone-content",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 275.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $275.\n
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
        service a property that is 5999 sq ft or less.
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
  },
  premier: {
    sizeLimit: "9999",
    a: {
      eventName: "Standard Service <= 9999 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-9999",
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
      serviceFee: 1500.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
    b: {
      eventName: "Standard Service <= 9999 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-9999-with-drone-pictures",
      eventDuration: 8,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 300.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $300.\n
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
      serviceFee: 2300.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
    c: {
      eventName: "Standard <= 9999 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-9999-with-drone-videos",
      eventDuration: 8,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 350.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $350.\n
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
      serviceFee: 2400.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
    d: {
      eventName: "Standard <= 9999 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-9999-with-drone-content",
      eventDuration: 8,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 400.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $400.\n
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
      serviceFee: 2500.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
  },
  deluxe: {
    minSize: "10000",
    a: {
      eventName: "Deluxe Service >= 10000 sqft",
      description: "Time of appointment for service.",
      eventLink: "deluxe-10000",
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
      serviceFee: 4500.00,
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
    b: {
      eventName: "Deluxe Service >= 10000 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-10000-with-drone-pictures",
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
    c: {
      eventName: "Deluxe Service >= 10000 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-10000-with-drone-videos",
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
      serviceFee: 5500.00,
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
    d: {
      eventName: "Deluxe Service >= 10000 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-10000-with-drone-content",
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
      serviceFee: 6000.00,
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
  },
  'small-business-basic': {
    sizeLimit: "2000",
    a: {
      eventName: "Standard Service <= 2000 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-2000",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 100.00,
      serviceFee: 800.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $100.\n
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
        service a property that is 1000 sq ft or less.
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
      }
    },
    b: {
      eventName: "Standard Service <= 2000 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-2000-with-drone-pictures",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 200.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $200.\n
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
      serviceFee: 1300.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 1000 sq ft or less.
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
      }
    },
    c: {
      eventName: "Standard <= 2000 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-2000-with-drone-videos",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 300.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $300.\n
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
        service a property that is 1000 sq ft or less.
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
      }
    },
    d: {
      eventName: "Standard <= 2000 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-2000-with-drone-content",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 400.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $400.\n
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
        service a property that is 1000 sq ft or less.
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
      }
    },
  },
  'small-business-fine': {
    sizeLimit: "3500",
    a: {
      eventName: "Standard Service <= 3500 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-3500",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 150.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $150.\n
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
        service a property that is 2500 sq ft or less.
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
      }
    },
    b: {
      eventName: "Standard Service <= 3500 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-3500-with-drone-pictures",
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
      serviceFee: 1600.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 2500 sq ft or less.
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
      }
    },
    c: {
      eventName: "Standard <= 3500 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-3500-with-drone-videos",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 350.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $350.\n
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
        service a property that is 2500 sq ft or less.
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
      }
    },
    d: {
      eventName: "Standard <= 3500 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-3500-with-drone-content",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 450.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $450.\n
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
      serviceFee: 2000.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 2500 sq ft or less.
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
      }
    },
  },
  'small-business-premium': {
    sizeLimit: "5999",
    a: {
      eventName: "Standard Service <= 5999 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-5999",
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
      serviceFee: 1800.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 4999 sq ft or less.
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
      }
    },
    b: {
      eventName: "Standard Service <= 5999 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-5999-with-drone-pictures",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 350.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $350.\n
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
      serviceFee: 2100.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 4999 sq ft or less.
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
      }
    },
    c: {
      eventName: "Standard <= 5999 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-5999-with-drone-videos",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 450.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $450.\n
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
      serviceFee: 2400.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 4999 sq ft or less.
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
      }
    },
    d: {
      eventName: "Standard <= 5999 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-5999-with-drone-content",
      eventDuration: 4,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 550.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $550.\n
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
      serviceFee: 2500.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 4999 sq ft or less.
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
      }
    },
  },
  'small-business-premier': {
    sizeLimit: "9999",
    a: {
      eventName: "Standard Service <= 9999 sqft",
      description: "Time of appointment for service.",
      eventLink: "standard-9999",
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
      serviceFee: 3000.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
      }
    },
    b: {
      eventName: "Standard Service <= 9999 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-9999-with-drone-pictures",
      eventDuration: 8,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 600.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $600.\n
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
      serviceFee: 3300.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
      }
    },
    c: {
      eventName: "Standard <= 9999 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-9999-with-drone-videos",
      eventDuration: 8,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 700.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $700.\n
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
      serviceFee: 3600.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
      }
    },
    d: {
      eventName: "Standard <= 9999 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-9999-with-drone-content",
      eventDuration: 8,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 800.00,
      reschedulingPolicy: `
        All scheduled and paid events must be 
        rescheduled prior to one week of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $800.\n
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
      serviceFee: 4000.00,
      paymentTerms: `
        This is the fee for scheduling and having us
        service a property that is 9999 sq ft or less.
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
      }
    },
  },
  'small-business-deluxe': {
    minSize: "10000",
    a: {
      eventName: "Deluxe Service >= 10000 sqft",
      description: "Time of appointment for service.",
      eventLink: "deluxe-10000",
      eventDuration: 12,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1000.00,
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
      }
    },
    b: {
      eventName: "Deluxe Service >= 10000 sqft w/ Drone pictures",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-10000-with-drone-pictures",
      eventDuration: 12,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1000.00,
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
      serviceFee: 5500.00,
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
      }
    },
    c: {
      eventName: "Deluxe Service >= 10000 sqft w/ Drone Videos",
      description: `
        Time of appointment for service.\n
        Includes aerial drone videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-10000-with-drone-videos",
      eventDuration: 12,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1000.00,
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
      serviceFee: 6000.00,
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
      }
    },
    d: {
      eventName: "Deluxe Service >= 10000 sqft w/ Drone Content",
      description: `
        Time of appointment for service.\n
        Includes aerial drone photos and videos by DJI Phantom 4
        Pro along with basic 3d tour package by
        MatterPort Pro 2.
      `,
      eventLink: "standard-10000-with-drone-content",
      eventDuration: 12,
      dateRange: 60,
      timeZone: "PST",
      reschedulingFee: 1000.00,
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
      serviceFee: 7000.00,
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
