const mockTrains = [
    {
      id: 1,
      name: 'Chennai Exp',
      Number: '2344',
      "departureTime":
      {
        "hours":21,
        "minutes":35,
        "Seconds":0
      },
      schedule: '9:00 AM - 10:00 AM',
      sleeperSeats: 50,
      acSeats: 20,
      sleeperPrice: 500,
      acPrice: 1000,
      delayedBy: 15,
    },
    {
        id: 2,
        name: 'Hyderabad Exp',
        Number: '2341',
        "departureTime":
        {
          "hours":21,
          "minutes":35,
          "Seconds":0
        },
        schedule: '9:00 AM - 10:00 AM',
        sleeperSeats: 50,
        acSeats: 20,
        sleeperPrice: 500,
        acPrice: 1000,
        delayedBy: 5,
      },
      {
        id: 3,
        name: 'Delhi Door Hai Exp',
        Number: '2343',
        schedule: '1:00 PM - 3:00 PM',
        sleeperSeats: 40,
        acSeats: 10,
        sleeperPrice: 200,
        acPrice: 700,
        delayedBy: 3,
      },
      
    // Add more trains as needed
  ];
  
  export default mockTrains;
  