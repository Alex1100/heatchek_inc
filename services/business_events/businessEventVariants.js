const businessEventVariants = {
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $50.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $100.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $150.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $200.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $75.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $125.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $175.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $225.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $125.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $175.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $225.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $275.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $250.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $300.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $350.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $400.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $500.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $500.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $500.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
      reschedulingFee: 200.00,
      cancellationPolicy: `
        Must cancel event prior to 3 days
        (72 hours) of the scheduled event.\n
        If we need to reschedule there will be
        a rescheduling fee of $200.\n
        Please contact the company at
        heatchekservice@heatchek.io for any additional questions.
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
          required: true,
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
};


module.exports = {
  businessEventVariants,
}
