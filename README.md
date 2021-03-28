# chargemap

## API Examples
* ### baseURL 
* ### HTTP GET  '/'
  * with filters "start" and "limit"  http://localhost:3000/station?start=10&limit=2
      

      ``` [
    {
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
    }
   ] ```
  * ** filtering by geo location **  http://localhost:3000/station?topRight={"lat":60.2821946,"lng":25.036108}&bottomLeft={"lat":60.1552076,"lng":24.7816538}
  
* ### HTTP POST '/' 
  
    ``` {
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
    ]
   } ```

* ### HTTP PUT '/:id' 
  
  *       baseURl/_id                     baseURl/60601dbb30ead127d827d85a 
         
      ``` {
    "Station": {
        "_id": "60601dbb30ead127d827d85a",
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

    ]
    } ``` 

  * ### HTTP DELETE '/:id'    USE id,   606020c730ead127d827d85c
     ```  {
    "Station": {
        "_id": "606020c730ead127d827d85c",
        "Title": "Capgemini Oy",
        "Town": "Espoo",
        "AddressLine1": "Sinimäentie 8b",
        "StateOrProvince": "Southern Finland",
        "Postcode": "02630",
        "Location": {
        "coordinates": [24.77772323548868, 60.203353130088146]
        }
    },
    "Connections": [
        "606020c730ead127d827d85b"
    ]
     }```


  * ### HTTP GET '/:id'    USE id,   6060232030ead127d827d85e
      Example result

     ```  {
    "Location": {
        "coordinates": [
            24.77772323548868,
            60.203353130088146
        ]
    },
    "Connections": [
        {
            "_id": "6060232030ead127d827d85d",
            "ConnectionTypeID": {
                "_id": "5e39eecac5598269fdad81a0",
                "FormalName": "Avcon SAE J1772-2001",
                "Title": "Avcon Connector",
                "__v": 0
            },
            "CurrentTypeID": {
                "_id": "5e39ef4a6921476aaf62404a",
                "Description": "Alternating Current - Single Phase",
                "Title": "AC (Single-Phase)",
                "__v": 0
            },
            "LevelID": {
                "_id": "5e39edf7bb7ae768f05cf2bc",
                "Comments": "Under 2 kW, usually domestic socket types",
                "IsFastChargeCapable": false,
                "Title": "Level 1 : Low (Under 2kW)",
                "__v": 0
            },
            "Quantity": 3,
            "__v": 0
        }
    ],
    "Title": "Capgemini Oy",
    "Town": "Espoo",
    "AddressLine1": "Sinimäentie 8b",
    "StateOrProvince": "Southern Finland",
    "Postcode": "02630",
    "id": "6060232030ead127d827d85e" 
       } ```




