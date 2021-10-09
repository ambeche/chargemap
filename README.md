# chargemap

  REST API for serving a chargemap application with the data from every available charging station. A Charging station comprises of different connections, levels and, location and availability.

## API Examples
## baseURL   https://chargemap-rest-api.herokuapp.com/station

* ## HTTP GET   '/' : Get all Stations
  * ## with filters "start" and "limit"  https://chargemap-rest-api.herokuapp.com/station?start=10&limit=2
      

     ```
       *Example Result*
       
       [{
        "Location": {
            "coordinates": [
                25.017043672427235,
                60.251239545982514
            ],
            "type": "Point"
        },
        "Connections": [
            {
                "_id": "5e590b0a7536c009841db2f8",
                "ConnectionTypeID": {
                    "_id": "5e39eecac5598269fdad81c3",
                    "FormalName": "IEC 62196-2 Type 2",
                    "Title": "Type 2 (Socket Only)",
                    "__v": 0
                },
                "LevelID": {
                    "_id": "5e39edf7bb7ae768f05cf2bd",
                    "Comments": "Over 2 kW, usually non-domestic socket type",
                    "IsFastChargeCapable": false,
                    "Title": "Level 2 : Medium (Over 2kW)",
                    "__v": 0
                },
                "CurrentTypeID": {
                    "_id": "5e39ef4a6921476aaf62404b",
                    "Description": "Alternating Current - Three Phase",
                    "Title": "AC (Three-Phase)",
                    "__v": 0
                },
                "Quantity": 4,
                "__v": 0
            }
        ],
        "Title": "Helen Malmi uimagalli",
        "AddressLine1": "Pekanraitti 14",
        "Town": "Helsinki",
        "StateOrProvince": "Southern Finland",
        "Postcode": "00700",
        "id": "5e590b0a7536c009841db2f9"
      }]

  *  ### filtering by geo location   https://chargemap-rest-api.herokuapp.com/station?topRight={"lat":60.2821946,"lng":25.036108}&bottomLeft={"lat":60.1552076,"lng":24.7816538}


  
* ## HTTP POST    '/' Create a Station ( [test with Postman](https://www.postman.com/downloads/))
  
   
               method: POST,
               body: 
                {
               "Station": {
                  "Title": "Capgemini Oy",
                  "Town": "Espoo",
                  "AddressLine1": "Sinimäentie 8b",
                  "StateOrProvince": "Southern Finland",
                  "Postcode": "02630",
                  "Location": {
                  "coordinates": [24.77772323548868, 60.203353130088146]
                  }
                },
               "Connections":[
                  {
                  "ConnectionTypeID": "5e39eecac5598269fdad81a0",
                  "CurrentTypeID": "5e39ef4a6921476aaf62404a",
                  "LevelID": "5e39edf7bb7ae768f05cf2bc",
                  "Quantity": 4
                  }
                  ]} 

                  *Server Response*

                  {
              "Location": {
                  "coordinates": [
                      24.77772323548868,
                      60.203353130088146
                  ]
              },
              "Connections": [
                  "6161a6b125d86a07ec67c787"
              ],
              "Title": "Capgemini Oy",
              "Town": "Espoo",
              "AddressLine1": "Sinimäentie 8b",
              "StateOrProvince": "Southern Finland",
              "Postcode": "02630",
              "id": "6161a6b125d86a07ec67c788"
           }
        

* ## HTTP PUT      '/:id'  
       with Postman - use:https://chargemap-rest-api.herokuapp.com/station/station/6161a6b125d86a07ec67c788
   ``` 
   {
     "Station": {
        "_id": "6161a6b125d86a07ec67c788",
        "Title": "Capgemini Oy",
        "Town": "Espoo",
        "AddressLine1": "Sinimäentie 8b",
        "StateOrProvince": "Southern Finland",
        "Postcode": "02630",
        "Location": {
        "coordinates": [24.77772323548868, 60.203353130088146]
        }
    },
    "Connections":[
      {
        "_id": "60601dbb30ead127d827d858",
        "ConnectionTypeID": "5e39eecac5598269fdad81a0",
        "CurrentTypeID": "5e39ef4a6921476aaf62404a",
        "LevelID": "5e39edf7bb7ae768f05cf2bc",
        "Quantity": 10
     },
       {
        "_id": "60601dbb30ead127d827d859",
        "ConnectionTypeID": "5e39eecac5598269fdad81a0",
        "CurrentTypeID": "5e39ef4a6921476aaf62404a",
        "LevelID": "5e39edf7bb7ae768f05cf2bc",
        "Quantity": 2
      }

        ] } 


  
 * ## HTTP DELETE      '/:id'    USE id,   5e590b0a7536c009841db2f7
 
          // test with Postman
          https://chargemap-rest-api.herokuapp.com/station/5e590b0a7536c009841db2f7



  * ## HTTP GET '/:id'    USE id,   5e590b0a7536c009841db2e1
      https://chargemap-rest-api.herokuapp.com/station/5e590b0a7536c009841db2e1

      *Example result*

       
                {
        Location: {
        coordinates: [
        24.77772323548868,
        60.203353130088146
        ],
        type: "Point"
        },
        Connections: [
        {
        _id: "5e590b0a7536c009841db2e0",
        ConnectionTypeID: {
        _id: "5e39eecac5598269fdad81c3",
        FormalName: "IEC 62196-2 Type 2",
        Title: "Type 2 (Socket Only)",
        __v: 0
        },
        LevelID: {
        _id: "5e39edf7bb7ae768f05cf2bd",
        Comments: "Over 2 kW, usually non-domestic socket type",
        IsFastChargeCapable: false,
        Title: "Level 2 : Medium (Over 2kW)",
        __v: 0
        },
        CurrentTypeID: {
        _id: "5e39ef4a6921476aaf62404b",
        Description: "Alternating Current - Three Phase",
        Title: "AC (Three-Phase)",
        __v: 0
        },
        Quantity: 2,
        __v: 0
        }
        ],
        Title: "Capgemini Oy",
        AddressLine1: "Sinimäentie 8b",
        Town: "Espoo",
        StateOrProvince: "Southern Finland",
        Postcode: "02630",
        id: "5e590b0a7536c009841db2e1"
        }




