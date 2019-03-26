define({ "api": [
  {
    "type": "get",
    "url": "/api/",
    "title": "Request API info",
    "name": "GetDependencies",
    "group": "API",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>API status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"up\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/APIInfoController.ts",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "/api/about/dependencies",
    "title": "Request dependencies",
    "name": "GetAboutDependencies",
    "group": "About",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information about dependencies.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [{\n        \"name\": \"bcrypt\",\n        \"version\": \"1.0.3\",\n        \"repository\": \"https://github.com/kelektiv/node.bcrypt.js\",\n        \"license\": \"MIT\",\n        \"devDependency\": false\n    }, {\n        \"name\": \"express\",\n        \"version\": \"4.16.2\",\n        \"repository\": \"https://github.com/expressjs/express\",\n        \"devDependency\": false\n    }, {\n        \"name\": \"winston\",\n        \"version\": \"2.4.0\",\n        \"repository\": \"https://github.com/winstonjs/winston\",\n        \"license\": \"MIT\",\n        \"devDependency\": false\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HttpError",
            "description": "<p>500 - Licensefile not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/AboutController.ts",
    "groupTitle": "About"
  },
  {
    "type": "post",
    "url": "/api/auth/activationresend",
    "title": "Resend Activation",
    "name": "ActivationResend",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of user which activation should be resend.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>matriculation number of user which activation should be resend.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email the new activation should be sent to.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "BadRequestError": [
          {
            "group": "BadRequestError",
            "optional": false,
            "field": "400",
            "description": "<p>User was not found.</p>"
          }
        ],
        "HttpError": [
          {
            "group": "HttpError",
            "optional": false,
            "field": "503",
            "description": "<p>You can only resend the activation every X minutes. Your next chance is in time left till next try in 'try-after' header in seconds</p>"
          }
        ],
        "InternalServerError": [
          {
            "group": "InternalServerError",
            "optional": false,
            "field": "Could",
            "description": "<p>not send E-Mail</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/api/auth/logout",
    "title": "Logout user by clearing the httpOnly token cookie.",
    "name": "AuthLogout",
    "group": "Auth",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/activate",
    "title": "Activate user",
    "name": "PostAuthActivate",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authenticationToken",
            "description": "<p>Authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Confirmation of activation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HttpError",
            "description": "<p>422 - could not activate user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login user by responding with a httpOnly JWT cookie and the user's IUserModel data.",
    "name": "PostAuthLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Request",
            "optional": false,
            "field": "request",
            "description": "<p>Login request (with email and password).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IUserModel",
            "optional": false,
            "field": "user",
            "description": "<p>Authenticated user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user\": {\n        \"_id\": \"5a037e6a60f72236d8e7c813\",\n        \"updatedAt\": \"2018-01-08T19:24:26.522Z\",\n        \"createdAt\": \"2017-11-08T22:00:10.897Z\",\n        \"email\": \"admin@test.local\",\n        \"__v\": 0,\n        \"isActive\": true,\n        \"lastVisitedCourses\": [],\n        \"role\": \"admin\",\n        \"profile\": {\n            \"firstName\": \"Dago\",\n            \"lastName\": \"Adminman\",\n            \"picture\": {}\n        },\n        \"id\": \"5a037e6a60f72236d8e7c813\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register user",
    "name": "PostAuthRegister",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "user",
            "description": "<p>New user to be registered.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>That matriculation number is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Could not send E-Mail</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/requestreset",
    "title": "Request password reset",
    "name": "PostAuthRequestReset",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email to notify.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Confirmation of email transmission.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HttpError",
            "description": "<p>422 - could not reset users password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Could not send E-Mail</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/reset",
    "title": "Reset password",
    "name": "PostAuthReset",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>Authentication token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Confirmation of reset.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HttpError",
            "description": "<p>422 - could not reset users password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>your reset password token is expired</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/chatRoom",
    "title": "get a chat room",
    "name": "getChatRoom",
    "group": "ChatRoom",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id:",
            "description": "<p>chatRoom ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IChatRoom",
            "optional": false,
            "field": "a",
            "description": "<p>ChatRoom Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"_id\": \"5a037e6b60f72236d8e7c857\",\n       \"updatedAt\": \"2017-11-08T22:00:11.693Z\",\n       \"createdAt\": \"2017-11-08T22:00:11.693Z\",\n       \"name\": \"ChatRoom Name\",\n       \"description\": \"ChatRoom Description\",\n       \"__v\": 0,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ChatRoomController.ts",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "get",
    "url": "/api/config/:id",
    "title": "Request config",
    "name": "GetConfig",
    "group": "Config",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Config name (e.g. legalnotice).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Config",
            "optional": false,
            "field": "config",
            "description": "<p>Config.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"legalnotice\",\n    \"value\": \"This will show the legalnotice.\",\n    \"updatedAt\": \"2017-11-08T22:00:11.693Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.693Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ConfigController.ts",
    "groupTitle": "Config"
  },
  {
    "type": "get",
    "url": "/api/config/public/:id",
    "title": "Request public config",
    "name": "GetConfigPublic",
    "group": "Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Config name (e.g. legalnotice).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Config",
            "optional": false,
            "field": "config",
            "description": "<p>Public config.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"legalnotice\",\n    \"value\": \"This will show the legalnotice.\",\n    \"updatedAt\": \"2017-11-08T22:00:11.693Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.693Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ConfigController.ts",
    "groupTitle": "Config"
  },
  {
    "type": "put",
    "url": "/api/config/:id",
    "title": "Update config",
    "name": "PutConfig",
    "group": "Config",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Config name (e.g. legalnotice).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>New data (with single 'data' string property).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ConfigController.ts",
    "groupTitle": "Config"
  },
  {
    "type": "post",
    "url": "/api/courses/picture/:id",
    "title": "Add course picture",
    "name": "AddCoursePicture",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "responsiveImageDataRaw",
            "description": "<p>Image as data object.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Empty",
            "description": "<p>object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"breakpoints\":[\n    {\n      \"screenSize\":0,\n      \"imageSize\":{\n        \"width\":284,\n        \"height\":190\n      },\n      \"pathToImage\":\"uploads/courses/5c0fa2770315e73d6c7babfe_1544542544919_0.jpg\",\n      \"pathToRetinaImage\":\"uploads/courses/5c0fa2770315e73d6c7babfe_1544542544919_0@2x.jpg\"\n    }\n  ],\n  \"_id\":\"5c0fd95871707a3a888ae70a\",\n  \"__t\":\"Picture\",\n  \"name\":\"5c0fa2770315e73d6c7babfe_1544542544919.jpg\",\n  \"link\":\"-\",\n  \"size\":0,\n  \"mimeType\":\"image/jpeg\",\n  \"createdAt\":\"2018-12-11T15:35:52.423Z\",\n  \"updatedAt\":\"2018-12-11T15:35:52.423Z\",\n  \"__v\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "delete",
    "url": "/api/courses/:id",
    "title": "Delete course",
    "name": "DeleteCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "delete",
    "url": "/api/courses/picture/:id",
    "title": "Delete course picture",
    "name": "DeleteCoursePicture",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Empty",
            "description": "<p>object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/courses/:id/edit",
    "title": "Request edit information for a specific course",
    "name": "GetCourseEdit",
    "group": "Course",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ICourse",
            "optional": false,
            "field": "course",
            "description": "<p>ICourse object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"teachers\": [\n        {\n            \"profile\": {\n                \"lastName\": \"Teachman\",\n                \"firstName\": \"Daniel\"\n            },\n            \"role\": \"teacher\",\n            \"lastVisitedCourses\": [\n                \"5ad0f9b56ff514268c5adc8d\",\n                \"5ad0f9b56ff514268c5adc8b\",\n                \"5ad0f9b56ff514268c5adc8c\",\n                \"5ad2c3ba94e45c0c8493da06\",\n                \"5ad7a43f943190432c5af597\",\n                \"5ad0f9b56ff514268c5adc90\"\n            ],\n            \"isActive\": true,\n            \"_id\": \"5ad0f9b56ff514268c5adc7e\",\n            \"updatedAt\": \"2018-04-21T23:52:03.424Z\",\n            \"createdAt\": \"2018-04-13T18:40:53.189Z\",\n            \"email\": \"teacher1@test.local\",\n            \"__v\": 0,\n            \"id\": \"5ad0f9b56ff514268c5adc7e\"\n        }\n    ],\n    \"students\": [\n        {\n            \"profile\": {\n                \"firstName\": \"Fabienne\",\n                \"lastName\": \"Wiedenroth\"\n            },\n            \"role\": \"student\",\n            \"lastVisitedCourses\": [],\n            \"isActive\": true,\n            \"_id\": \"5ad0f9b56ff514268c5adc64\",\n            \"updatedAt\": \"2018-04-13T18:40:53.108Z\",\n            \"createdAt\": \"2018-04-13T18:40:53.108Z\",\n            \"uid\": \"469952\",\n            \"email\": \"student5@test.local\",\n            \"__v\": 0,\n            \"id\": \"5ad0f9b56ff514268c5adc64\"\n        },\n        {\n            \"profile\": {\n                \"firstName\": \"Clemens\",\n                \"lastName\": \"TillmannsEdit\",\n                \"theme\": \"night\"\n            },\n            \"role\": \"student\",\n            \"lastVisitedCourses\": [\n                \"5ad0f9b56ff514268c5adc8b\",\n                \"5ad0f9b56ff514268c5adc8d\",\n                \"5ad0f9b56ff514268c5adc8e\"\n            ],\n            \"isActive\": true,\n            \"_id\": \"5ad0f9b56ff514268c5adc76\",\n            \"updatedAt\": \"2018-04-13T22:22:17.046Z\",\n            \"createdAt\": \"2018-04-13T18:40:53.163Z\",\n            \"uid\": \"970531\",\n            \"email\": \"edit@test.local\",\n            \"__v\": 0,\n            \"id\": \"5ad0f9b56ff514268c5adc76\"\n        }\n    ],\n    \"lectures\": [\n        {\n            \"units\": [\n                {\n                    \"__t\": \"free-text\",\n                    \"_id\": \"5ad0f9b56ff514268c5adc99\",\n                    \"updatedAt\": \"2018-04-13T18:40:53.305Z\",\n                    \"createdAt\": \"2018-04-13T18:40:53.305Z\",\n                    \"name\": \"What is course fixture for?\",\n                    \"description\": \"\",\n                    \"markdown\": \"To test the 'accesskey' enrollType.\",\n                    \"_course\": \"5ad0f9b56ff514268c5adc8d\",\n                    \"__v\": 0\n                }\n            ],\n            \"_id\": \"5ad0f9b56ff514268c5adc92\",\n            \"updatedAt\": \"2018-04-13T18:40:53.316Z\",\n            \"createdAt\": \"2018-04-13T18:40:53.284Z\",\n            \"name\": \"Documentation\",\n            \"description\": \"Documents the course fixture.\",\n            \"__v\": 1\n        }\n    ],\n    \"enrollType\": \"accesskey\",\n    \"whitelist\": [],\n    \"_id\": \"5ad0f9b56ff514268c5adc8d\",\n    \"updatedAt\": \"2018-04-21T02:45:15.877Z\",\n    \"createdAt\": \"2018-04-13T18:40:53.279Z\",\n    \"name\": \"Access key test\",\n    \"description\": \"This course is used to test the access key course enroll type.\",\n    \"active\": true,\n    \"accessKey\": \"accessKey1234\",\n    \"courseAdmin\": {\n        \"profile\": {\n            \"firstName\": \"Ober\",\n            \"lastName\": \"Lehrer\"\n        },\n        \"role\": \"teacher\",\n        \"lastVisitedCourses\": [],\n        \"isActive\": true,\n        \"_id\": \"5ad0f9b56ff514268c5adc7f\",\n        \"updatedAt\": \"2018-04-13T18:40:53.192Z\",\n        \"createdAt\": \"2018-04-13T18:40:53.192Z\",\n        \"email\": \"teacher2@test.local\",\n        \"__v\": 0,\n        \"id\": \"5ad0f9b56ff514268c5adc7f\"\n    },\n    \"__v\": 6,\n    \"media\": {\n        \"subDirectories\": [],\n        \"files\": [],\n        \"_id\": \"5ad2569171d8982ad0761451\",\n        \"updatedAt\": \"2018-04-14T19:29:21.296Z\",\n        \"createdAt\": \"2018-04-14T19:29:21.296Z\",\n        \"name\": \"Access key test\",\n        \"__v\": 0\n    },\n    \"hasAccessKey\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Includes implicit authorization check. (In getCourse helper method.)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>(Redundant) Authorization check.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/courses/:id",
    "title": "Request view information for a specific course",
    "name": "GetCourseView",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ICourseView",
            "optional": false,
            "field": "course",
            "description": "<p>ICourseView object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ad0f9b56ff514268c5adc8d\",\n    \"name\": \"Access key test\",\n    \"description\": \"This course is used to test the access key course enroll type.\",\n    \"lectures\": [\n        {\n            \"units\": [\n                {\n                    \"__t\": \"free-text\",\n                    \"_id\": \"5ad0f9b56ff514268c5adc99\",\n                    \"updatedAt\": \"2018-04-13T18:40:53.305Z\",\n                    \"createdAt\": \"2018-04-13T18:40:53.305Z\",\n                    \"name\": \"What is the purpose of this course fixture?\",\n                    \"description\": \"\",\n                    \"markdown\": \"To test the 'accesskey' enrollType.\",\n                    \"_course\": \"5ad0f9b56ff514268c5adc8d\",\n                    \"__v\": 0\n                }\n            ],\n            \"_id\": \"5ad0f9b56ff514268c5adc92\",\n            \"updatedAt\": \"2018-04-13T18:40:53.316Z\",\n            \"createdAt\": \"2018-04-13T18:40:53.284Z\",\n            \"name\": \"Documentation\",\n            \"description\": \"Documents the course fixture.\",\n            \"__v\": 1\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Includes implicit authorization check. (In getCourse helper method.)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>(Redundant) Authorization check.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/courses/",
    "title": "Request courses of current user",
    "name": "GetCourses",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ICourseDashboard[]",
            "optional": false,
            "field": "courses",
            "description": "<p>List of ICourseDashboard objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"_id\": \"5ad0f9b56ff514268c5adc8c\",\n        \"name\": \"Inactive Test\",\n        \"active\": false,\n        \"description\": \"An inactive course.\",\n        \"enrollType\": \"free\",\n        \"userCanEditCourse\": true,\n        \"userCanViewCourse\": true,\n        \"userIsCourseAdmin\": true,\n        \"userIsCourseTeacher\": false,\n        \"userIsCourseMember\": true\n    },\n    {\n        \"_id\": \"5ad0f9b56ff514268c5adc8d\",\n        \"name\": \"Access key test\",\n        \"active\": true,\n        \"description\": \"This course is used to test the access key course enroll type.\",\n        \"enrollType\": \"accesskey\",\n        \"userCanEditCourse\": true,\n        \"userCanViewCourse\": true,\n        \"userIsCourseAdmin\": false,\n        \"userIsCourseTeacher\": true,\n        \"userIsCourseMember\": true\n    },\n    {\n        \"_id\": \"5ad0f9b56ff514268c5adc8e\",\n        \"name\": \"Advanced web development\",\n        \"active\": true,\n        \"description\": \"Learn all the things! Angular, Node, Express, MongoDB, TypeScript ...\",\n        \"enrollType\": \"free\",\n        \"userCanEditCourse\": false,\n        \"userCanViewCourse\": false,\n        \"userIsCourseAdmin\": false,\n        \"userIsCourseTeacher\": false,\n        \"userIsCourseMember\": false\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/api/courses/",
    "title": "Add course",
    "name": "PostCourse",
    "group": "Course",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ICourse",
            "optional": false,
            "field": "course",
            "description": "<p>New course data.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Course",
            "optional": false,
            "field": "course",
            "description": "<p>Added course.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c83d\",\n    \"updatedAt\": \"2017-11-08T22:00:11.869Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.263Z\",\n    \"name\": \"Introduction to web development\",\n    \"description\": \"Whether you're just getting started with Web development or are just expanding your horizons...\",\n    \"courseAdmin\": {\n        \"_id\": \"5a037e6a60f72236d8e7c815\",\n        \"updatedAt\": \"2017-11-08T22:00:10.898Z\",\n        \"createdAt\": \"2017-11-08T22:00:10.898Z\",\n        \"email\": \"teacher2@test.local\",\n        \"isActive\": true,\n        \"role\": \"teacher\",\n        \"profile\": {\n            \"firstName\": \"Ober\",\n            \"lastName\": \"Lehrer\"\n        },\n        \"id\": \"5a037e6a60f72236d8e7c815\"\n    },\n    \"active\": true,\n    \"__v\": 1,\n    \"whitelist\": [],\n    \"enrollType\": \"free\",\n    \"lectures\": [],\n    \"students\": [],\n    \"teachers\": [],\n    \"id\": \"5a037e6b60f72236d8e7c83d\",\n    \"hasAccessKey\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Course name already in use.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/api/courses/:id/enroll",
    "title": "Enroll current student in course",
    "name": "PostCourseEnroll",
    "group": "Course",
    "permission": [
      {
        "name": "student"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data (with access key).</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Not allowed to join, you are not on whitelist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/api/courses/:id/leave",
    "title": "Sign out current student from course",
    "name": "PostCourseLeave",
    "group": "Course",
    "permission": [
      {
        "name": "student"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/api/courses/mail",
    "title": "Send mail to selected users",
    "name": "PostCourseMail",
    "group": "Course",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "mailData",
            "description": "<p>Mail data.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "freeFormMail",
            "description": "<p>Information about sent email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"accepted\": [\"geli.hda@gmail.com\"],\n    \"rejected\": [],\n    \"envelopeTime\": 5,\n    \"messageTime\": 4,\n    \"messageSize\": 874,\n    \"response\": \"250 ok:  Message 11936348 accepted\",\n    \"envelope\": {\n        \"from\": \"staging.geli.fbi@h-da.de\",\n        \"to\": [\"geli.hda@gmail.com\"]\n    },\n    \"messageId\": \"<f70858d7-d9f4-3f5b-a833-d94d2a440b33@h-da.de>\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/api/courses/:id/whitelist",
    "title": "Whitelist students for course",
    "name": "PostCourseWhitelist",
    "group": "Course",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Returns the new whitelist length.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  newlength: 10\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "HttpError",
            "description": "<p>UID is not a number 1.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Unauthorized user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "put",
    "url": "/api/courses/:id",
    "title": "Update course",
    "name": "PutCourse",
    "group": "Course",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ICourse",
            "optional": false,
            "field": "course",
            "description": "<p>New course data.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>ID and name of the course.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  _id: \"5a037e6b60f72236d8e7c83d\",\n  name: \"Introduction to web development\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Can't find the course. (Includes implicit authorization check.)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/CourseController.ts",
    "groupTitle": "Course"
  },
  {
    "type": "delete",
    "url": "/api/download/",
    "title": "Request to clean up the cache.",
    "name": "DeleteCache",
    "group": "Download",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/DownloadController.ts",
    "groupTitle": "Download"
  },
  {
    "type": "get",
    "url": "/api/download/:id",
    "title": "Request archived file",
    "name": "GetDownload",
    "group": "Download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Response",
            "optional": false,
            "field": "response",
            "description": "<p>Response (input).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Response",
            "optional": false,
            "field": "response",
            "description": "<p>Response (output).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>File could not be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Invalid id i.e. filename (e.g. '../something').</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/DownloadController.ts",
    "groupTitle": "Download"
  },
  {
    "type": "post",
    "url": "/api/download/pdf/individual",
    "title": "Post download request individual PDF",
    "name": "PostDownload",
    "group": "Download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "IDownload",
            "optional": false,
            "field": "data",
            "description": "<p>Course data.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Hash value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"da39a3ee5e6b4b0d3255bfef95601890afd80709\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/DownloadController.ts",
    "groupTitle": "Download"
  },
  {
    "type": "post",
    "url": "/api/download/pdf/single",
    "title": "Post download request single PDF",
    "name": "PostDownload",
    "group": "Download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "IDownload",
            "optional": false,
            "field": "data",
            "description": "<p>Course data.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Hash value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"da39a3ee5e6b4b0d3255bfef95601890afd80709\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/DownloadController.ts",
    "groupTitle": "Download"
  },
  {
    "type": "post",
    "url": "/api/duplicate/course/:id",
    "title": "Duplicate course",
    "name": "PostDuplicateCourse",
    "group": "Duplication",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object optionally containing the courseAdmin id for the duplicated course as &quot;courseAdmin&quot;. If unset, the currentUser will be set as courseAdmin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Course",
            "optional": false,
            "field": "course",
            "description": "<p>Duplicated course ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab19c382ac32e46dcaa1574\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the course couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>assertUserDuplicationAuthorization check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/DuplicationController.ts",
    "groupTitle": "Duplication"
  },
  {
    "type": "post",
    "url": "/api/duplicate/lecture/:id",
    "title": "Duplicate lecture",
    "name": "PostDuplicateLecture",
    "group": "Duplication",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Lecture ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object with target courseId (the lecture duplicate will be attached to this course).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Lecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>Duplicated lecture ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab1a218dab93c34f8541e25\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the lecture or the target courseId couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>assertUserDuplicationAuthorization check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/DuplicationController.ts",
    "groupTitle": "Duplication"
  },
  {
    "type": "post",
    "url": "/api/duplicate/unit/:id",
    "title": "Duplicate unit",
    "name": "PostDuplicateUnit",
    "group": "Duplication",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object with target lectureId (the unit duplicate will be attached to this lecture).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Unit",
            "optional": false,
            "field": "unit",
            "description": "<p>Duplicated unit ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab1a380f5bbeb423070d787\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the unit or the target lectureId couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>assertUserDuplicationAuthorization check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/DuplicationController.ts",
    "groupTitle": "Duplication"
  },
  {
    "type": "get",
    "url": "/api/export/course/:id",
    "title": "Export course",
    "name": "GetExportCourse",
    "group": "Export",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Course",
            "optional": false,
            "field": "course",
            "description": "<p>Course for export.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"Test 101\",\n    \"description\": \"Some course desc\",\n    \"enrollType\": \"whitelist\",\n    \"lectures\": [{\n        \"name\": \"Lecture One\",\n        \"description\": \"Some lecture desc\",\n        \"units\": []\n    }],\n    \"hasAccessKey\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the course couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>assertUserExportAuthorization check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ExportController.ts",
    "groupTitle": "Export"
  },
  {
    "type": "get",
    "url": "/api/export/lecture/:id",
    "title": "Export lecture",
    "name": "GetExportLecture",
    "group": "Export",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Lecture ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Lecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>Lecture for export.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"Lecture One\",\n    \"description\": \"Some lecture desc\",\n    \"units\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the lecture couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>assertUserExportAuthorization check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ExportController.ts",
    "groupTitle": "Export"
  },
  {
    "type": "get",
    "url": "/api/export/unit/:id",
    "title": "Export unit",
    "name": "GetExportUnit",
    "group": "Export",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unit ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Unit",
            "optional": false,
            "field": "unit",
            "description": "<p>Unit for export.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"progressable\": false,\n    \"weight\": 0,\n    \"name\": \"First unit\",\n    \"description\": null,\n    \"markdown\": \"Welcome, this is the start\",\n    \"__t\": \"free-text\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the unit couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>assertUserExportAuthorization check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ExportController.ts",
    "groupTitle": "Export"
  },
  {
    "type": "get",
    "url": "/api/export/user",
    "title": "Export the CurrentUser's own data.",
    "name": "GetExportUser",
    "group": "Export",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Exported personal user data, notifications, whitelists, courses, progress.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user\": {\n        \"profile\": {\n            \"picture\": {\n                \"name\": \"5b23c0387d7d4e2fd0148741-4602.png\",\n                \"alias\": \"ProfilePictureFilename.png\",\n                \"path\": \"uploads/users/5b23c0387d7d4e2fd0148741-4602.png\"\n            },\n            \"firstName\": \"Daniel\",\n            \"lastName\": \"Teachman\",\n            \"theme\": \"night\"\n        },\n        \"role\": \"teacher\",\n        \"lastVisitedCourses\": [\n            {\n                \"name\": \"Introduction to web development\",\n                \"description\": \"Short description here.\"\n            }\n        ],\n        \"isActive\": true,\n        \"email\": \"teacher1@test.local\"\n    },\n    \"notifications\": [],\n    \"notificationSettings\": null,\n    \"whitelists\": [],\n    \"courses\": [\n        {\n            \"name\": \"Introduction to web development\",\n            \"description\": \"Short description here.\"\n        }\n    ],\n    \"progress\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ExportController.ts",
    "groupTitle": "Export"
  },
  {
    "type": "post",
    "url": "/api/import/course",
    "title": "Import course",
    "name": "PostImportCourse",
    "group": "Import",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Course",
            "optional": false,
            "field": "course",
            "description": "<p>Imported course.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab2518b6a53b2463c44ef29\",\n    \"updatedAt\": \"2018-03-21T12:35:23.812Z\",\n    \"createdAt\": \"2018-03-21T12:35:23.803Z\",\n    \"name\": \"Test 101 (copy)\",\n    \"description\": \"Some course desc\",\n    \"courseAdmin\": \"5a037e6a60f72236d8e7c813\",\n    \"active\": false,\n    \"__v\": 1,\n    \"whitelist\": [],\n    \"enrollType\": \"whitelist\",\n    \"lectures\": [...],\n    \"students\": [],\n    \"teachers\": [],\n    \"hasAccessKey\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ImportController.ts",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/api/import/lecture/:course",
    "title": "Import lecture",
    "name": "PostImportLecture",
    "group": "Import",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>Course ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Lecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>Imported lecture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab25342579fd5301c34e62f\",\n    \"updatedAt\": \"2018-03-21T12:42:42.392Z\",\n    \"createdAt\": \"2018-03-21T12:42:42.392Z\",\n    \"name\": \"Lecture One\",\n    \"description\": \"Some lecture desc\",\n    \"__v\": 0,\n    \"units\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ImportController.ts",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/api/import/unit/:course/:lecture",
    "title": "Import unit",
    "name": "PostImportUnit",
    "group": "Import",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lectureId",
            "description": "<p>Lecture ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Unit",
            "optional": false,
            "field": "unit",
            "description": "<p>Imported unit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"__v\": 0,\n    \"updatedAt\": \"2018-03-21T12:50:36.628Z\",\n    \"createdAt\": \"2018-03-21T12:50:36.628Z\",\n    \"progressable\": false,\n    \"weight\": 0,\n    \"name\": \"First unit\",\n    \"description\": null,\n    \"markdown\": \"Welcome, this is the start\",\n    \"_course\": \"5ab2518b6a53b2463c44ef29\",\n    \"__t\": \"free-text\",\n    \"_id\": \"5ab2551c85b1ca402815e0b9\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/ImportController.ts",
    "groupTitle": "Import"
  },
  {
    "type": "delete",
    "url": "/api/lecture/:id",
    "title": "Delete lecture",
    "name": "DeleteLecture",
    "group": "Lecture",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Lecture ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>Confirmation of deletion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the lecture's course couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>userCanEditCourse check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/LectureController.ts",
    "groupTitle": "Lecture"
  },
  {
    "type": "get",
    "url": "/api/lecture/:id",
    "title": "Request lecture",
    "name": "GetLecture",
    "group": "Lecture",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Lecture ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Lecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>Lecture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c857\",\n    \"updatedAt\": \"2017-11-08T22:00:11.693Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.693Z\",\n    \"name\": \"Introduction\",\n    \"description\": \"something about me, us, whoever\",\n    \"__v\": 0,\n    \"units\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the lecture couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>userCanViewCourse check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/LectureController.ts",
    "groupTitle": "Lecture"
  },
  {
    "type": "post",
    "url": "/api/lecture/",
    "title": "Add lecture",
    "name": "PostLecture",
    "group": "Lecture",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ILectureCreate",
            "optional": false,
            "field": "data",
            "description": "<p>New lecture data with 'name', 'description' and target 'courseId'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Lecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>Added lecture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c857\",\n    \"updatedAt\": \"2017-11-08T22:00:11.693Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.693Z\",\n    \"name\": \"Introduction\",\n    \"description\": \"something about me, us, whoever\",\n    \"__v\": 0,\n    \"units\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the courseId couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>userCanEditCourse check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/LectureController.ts",
    "groupTitle": "Lecture"
  },
  {
    "type": "put",
    "url": "/api/lecture/:id",
    "title": "Update lecture",
    "name": "PutLecture",
    "group": "Lecture",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Lecture ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ILecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>New lecture data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Lecture",
            "optional": false,
            "field": "lecture",
            "description": "<p>Updated lecture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c857\",\n    \"updatedAt\": \"2018-01-29T23:43:07.220Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.693Z\",\n    \"name\": \"Introduction\",\n    \"description\": \"something about me, us, whoever\",\n    \"__v\": 0,\n    \"units\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>If the lecture's course couldn't be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>userCanEditCourse check failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/LectureController.ts",
    "groupTitle": "Lecture"
  },
  {
    "type": "get",
    "url": "/api/message/count",
    "title": "get number of messages in a given room",
    "name": "getMessageCount",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "room:",
            "description": "<p>the room to which the messages belong.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"count\": \"45\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/MessageController.ts",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/api/message",
    "title": "get all messages in a given room",
    "name": "getMessages",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "room:",
            "description": "<p>the room to which the messages belong.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip:",
            "description": "<p>number of messages to skip. default to 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit:",
            "description": "<p>number of messages to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "order:",
            "description": "<p>the order in which the messages are ordered. possible values: 1(ascending) or -1(descending). default to -1.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IMessageDisplay[]",
            "optional": false,
            "field": "messages",
            "description": "<p>in the given room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   chatName: \"student2\",\n   comments: [],\n   content: \"any message\",\n   createdAt: \"2018-06-22T21:14:50.924Z\",\n   updatedAt: \"2018-06-22T21:14:50.924Z\",\n   room : \"5b2d66c84daf0700d5afe7d8\",\n   _id: \"5b2d66ca4daf0700d5aff89c\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/MessageController.ts",
    "groupTitle": "Message"
  },
  {
    "type": "delete",
    "url": "/api/notification/:id",
    "title": "Delete notification",
    "name": "DeleteNotification",
    "group": "Notification",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Notification ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Notification could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/NotificationController.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/api/notification/",
    "title": "Get own notifications",
    "name": "GetNotifications",
    "group": "Notification",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "INotificationView[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>List of notifications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"_id\": \"5ab2fbe464efe60006cef0b1\",\n    \"changedCourse\": \"5c0fb47d8d583532143c68a7\",\n    \"changedLecture\": \"5bdb49f11a09bb3ca8ce0a10\",\n    \"changedUnit\": \"5be0691ee3859d38308dab18\",\n    \"text\": \"Course ProblemSolver has an updated text unit.\",\n    \"isOld\": false\n}, {\n    \"_id\": \"5ab2fc7b64efe60006cef0bb\",\n    \"changedCourse\": \"5be0691ee3859d38308dab19\",\n    \"changedLecture\": \"5bdb49ef1a09bb3ca8ce0a01\",\n    \"changedUnit\": \"5bdb49f11a09bb3ca8ce0a12\",\n    \"text\": \"Course katacourse has an updated unit.\",\n    \"isOld\": false\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/NotificationController.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/api/notification/user/:id",
    "title": "Create notification for user",
    "name": "PostNotification",
    "group": "Notification",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user that the new notification is assigned/sent to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetId",
            "description": "<p>Target id of the changed course, lecture or unit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetType",
            "description": "<p>Which type the targetId represents: Either 'course', 'lecture', 'unit' or 'text'. The 'text' type only uses the 'text' parameter while ignoring the 'targetId'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message that the new notification(s) will contain.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Did not find the targetId of targetType.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid targetType.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>The teacher doesn't have access to the corresponding course (if targetType isn't 'text'-only).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>No course was found for a given existing lecture.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/NotificationController.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/api/notification/",
    "title": "Create notifications",
    "name": "PostNotifications",
    "group": "Notification",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetId",
            "description": "<p>Target id of the changed course, lecture or unit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetType",
            "description": "<p>Which type the targetId represents: Either 'course', 'lecture' or 'unit'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message that the new notification(s) will contain.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Did not find the targetId of targetType.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid targetType.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>The teacher doesn't have access to the corresponding course.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>No course was found for a given existing lecture.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/NotificationController.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/api/notificationSettings/",
    "title": "Get own notification settings for all courses",
    "name": "GetNotificationSettings",
    "group": "NotificationSettings",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "INotificationSettingsView[]",
            "optional": false,
            "field": "settings",
            "description": "<p>List of notification settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"_id\": \"5ab2829142949f000857b8f8\",\n    \"course\": \"5be0691ee3859d38308dab19\",\n    \"notificationType\": \"allChanges\",\n    \"emailNotification\": false\n}, {\n    \"_id\": \"5ab283b342949f000857b8f9\",\n    \"course\": \"5c0fb47d8d583532143c68a7\",\n    \"notificationType\": \"relatedChanges\",\n    \"emailNotification\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/NotificationSettingsController.ts",
    "groupTitle": "NotificationSettings"
  },
  {
    "type": "put",
    "url": "/api/notificationSettings/",
    "title": "Set notification settings for a course (i.e. create or update them)",
    "name": "PutNotificationSettings",
    "group": "NotificationSettings",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course",
            "description": "<p>ID of the course for which notification settings are to be set.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notificationType",
            "description": "<p>New value for the primary notification setting (none/relatedChanges/allChanges).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailNotification",
            "description": "<p>New value for the email notification setting.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Did not find the given course.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>User doesn't have access to the given course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/NotificationSettingsController.ts",
    "groupTitle": "NotificationSettings"
  },
  {
    "type": "get",
    "url": "/api/progress/units/:id",
    "title": "Get unit progress",
    "name": "GetUnitProgress",
    "group": "Progress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unit ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Progress",
            "optional": false,
            "field": "progress",
            "description": "<p>Progress data or an empty object if no data is available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab2b9516fab4a3ae0cd6737\",\n    \"done\": false,\n    \"updatedAt\": \"2018-03-21T19:58:09.386Z\",\n    \"createdAt\": \"2018-03-21T19:58:09.386Z\",\n    \"unit\": \"5ab2b80a6fab4a3ae0cd672d\",\n    \"course\": \"5a53c474a347af01b84e54b7\",\n    \"answers\": {\n        \"5ab2b80a6fab4a3ae0cd672e\": {\n            \"5ab2b80a6fab4a3ae0cd6730\": true,\n            \"5ab2b80a6fab4a3ae0cd672f\": false\n        },\n        \"5ab2b8dd6fab4a3ae0cd6734\": {\n            \"5ab2b8dd6fab4a3ae0cd6736\": false,\n            \"5ab2b8dd6fab4a3ae0cd6735\": true\n        },\n        \"5ab2b8dd6fab4a3ae0cd6731\": {\n            \"5ab2b8dd6fab4a3ae0cd6733\": false,\n            \"5ab2b8dd6fab4a3ae0cd6732\": true\n        }\n    },\n    \"type\": \"task-unit-progress\",\n    \"user\": \"5a037e6a60f72236d8e7c813\",\n    \"__v\": 0,\n    \"__t\": \"task-unit-progress\",\n    \"id\": \"5ab2b9516fab4a3ae0cd6737\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ProgressController.ts",
    "groupTitle": "Progress"
  },
  {
    "type": "put",
    "url": "/api/progress/",
    "title": "Set progress for a unit (i.e. create or update it idempotently)",
    "name": "PutProgress",
    "group": "Progress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Progress ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>New progress data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Progress",
            "optional": false,
            "field": "progress",
            "description": "<p>Updated progress.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5ab2b9516fab4a3ae0cd6737\",\n    \"done\": false,\n    \"updatedAt\": \"2018-03-21T19:58:09.386Z\",\n    \"createdAt\": \"2018-03-21T19:58:09.386Z\",\n    \"unit\": \"5ab2b80a6fab4a3ae0cd672d\",\n    \"course\": \"5a53c474a347af01b84e54b7\",\n    \"answers\": {\n        \"5ab2b80a6fab4a3ae0cd672e\": {\n            \"5ab2b80a6fab4a3ae0cd6730\": true,\n            \"5ab2b80a6fab4a3ae0cd672f\": false\n        },\n        \"5ab2b8dd6fab4a3ae0cd6734\": {\n            \"5ab2b8dd6fab4a3ae0cd6736\": false,\n            \"5ab2b8dd6fab4a3ae0cd6735\": true\n        },\n        \"5ab2b8dd6fab4a3ae0cd6731\": {\n            \"5ab2b8dd6fab4a3ae0cd6733\": false,\n            \"5ab2b8dd6fab4a3ae0cd6732\": true\n        }\n    },\n    \"type\": \"task-unit-progress\",\n    \"user\": \"5a037e6a60f72236d8e7c813\",\n    \"__v\": 0,\n    \"__t\": \"task-unit-progress\",\n    \"id\": \"5ab2b9516fab4a3ae0cd6737\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ProgressController.ts",
    "groupTitle": "Progress"
  },
  {
    "type": "get",
    "url": "/api/report/overview/courses/:id",
    "title": "Request course overview",
    "name": "GetCourseOverview",
    "group": "Report",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Course with progress stats.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a53c474a347af01b84e54b7\",\n    \"name\": \"Test 101\",\n    \"lectures\": [{\n        \"_id\": \"5ab18d7defbc191b10dad856\",\n        \"name\": \"Lecture One\",\n        \"units\": [{\n            \"_id\": \"5ab2b80a6fab4a3ae0cd672d\",\n            \"updatedAt\": \"2018-03-21T19:56:13.326Z\",\n            \"createdAt\": \"2018-03-21T19:52:42.716Z\",\n            \"_course\": \"5a53c474a347af01b84e54b7\",\n            \"progressable\": true,\n            \"weight\": 0,\n            \"name\": \"Progressable unit\",\n            \"description\": null,\n            \"deadline\": \"2018-03-21T22:59:00.000Z\",\n            \"__v\": 1,\n            \"__t\": \"task\",\n            \"tasks\": [...],\n            \"progressData\": [{\n                \"name\": \"nothing\",\n                \"value\": -1\n            }, {\n                \"name\": \"tried\",\n                \"value\": 1\n            }, {\n                \"name\": \"done\",\n                \"value\": 0\n            }]\n        }]\n    }],\n    \"students\": [],\n    \"hasAccessKey\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>You are no admin or teacher for this course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ReportController.ts",
    "groupTitle": "Report"
  },
  {
    "type": "get",
    "url": "/api/report/result/courses/:id",
    "title": "Request course results",
    "name": "GetCourseResult",
    "group": "Report",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "students",
            "description": "<p>Students with units and progress stats.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"_id\": \"5954c62923de070007fad047\",\n    \"updatedAt\": \"2017-06-29T09:19:54.227Z\",\n    \"createdAt\": \"2017-06-29T09:19:37.436Z\",\n    \"email\": \"geli.hda@gmail.com\",\n    \"uid\": \"744961\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"lastVisitedCourses\": [],\n    \"role\": \"student\",\n    \"profile\": {\n        \"lastName\": \"Gerhard Paule\",\n        \"firstName\": \"Von Schröder\"\n    },\n    \"id\": \"5954c62923de070007fad047\",\n    \"progress\": {\n        \"units\": [],\n        \"stats\": [{\n            \"name\": \"Progress\",\n            \"series\": [{\n                \"name\": \"nothing\",\n                \"value\": 4\n            }, {\n                \"name\": \"tried\",\n                \"value\": 0\n            }, {\n                \"name\": \"done\",\n                \"value\": 0\n            }]\n        }]\n    }\n}, {\n    \"_id\": \"59fc9fbc6405b400085564c6\",\n    \"updatedAt\": \"2018-01-25T10:02:48.569Z\",\n    \"createdAt\": \"2017-11-03T16:56:28.167Z\",\n    \"email\": \"mueller.dav+test@gmail.com\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"lastVisitedCourses\": [\"597df6d5b7a9c0000616637f\", \"5a5f3b70b5cbe70006f9befc\", \"5953e5b868f8c80007898785\"],\n    \"role\": \"admin\",\n    \"profile\": {\n        \"firstName\": \"Test12\",\n        \"lastName\": \"Schmidt\",\n        \"theme\": \"default\"\n    },\n    \"id\": \"59fc9fbc6405b400085564c6\",\n    \"progress\": {\n        \"units\": [],\n        \"stats\": [{\n            \"name\": \"Progress\",\n            \"series\": [{\n                \"name\": \"nothing\",\n                \"value\": 4\n            }, {\n                \"name\": \"tried\",\n                \"value\": 0\n            }, {\n                \"name\": \"done\",\n                \"value\": 0\n            }]\n        }]\n    }\n}, {\n    \"_id\": \"597dfde2b7a9c0000616639d\",\n    \"updatedAt\": \"2018-01-25T10:48:21.987Z\",\n    \"createdAt\": \"2017-07-30T15:40:18.912Z\",\n    \"email\": \"mueller.dav+gelistudent@gmail.com\",\n    \"uid\": \"123456\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"lastVisitedCourses\": [\"5a5f3b70b5cbe70006f9befc\", \"597df6d5b7a9c0000616637f\", \"5a134dcc104f7700067562c0\"],\n    \"role\": \"student\",\n    \"profile\": {\n        \"firstName\": \"Davidstudent1\",\n        \"lastName\": \"Müllerstudent2\"\n    },\n    \"id\": \"597dfde2b7a9c0000616639d\",\n    \"progress\": {\n        \"units\": [],\n        \"stats\": [{\n            \"name\": \"Progress\",\n            \"series\": [{\n                \"name\": \"nothing\",\n                \"value\": 4\n            }, {\n                \"name\": \"tried\",\n                \"value\": 0\n            }, {\n                \"name\": \"done\",\n                \"value\": 0\n            }]\n        }]\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>You are no admin or teacher for this course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ReportController.ts",
    "groupTitle": "Report"
  },
  {
    "type": "get",
    "url": "/api/report/details/courses/:courseId/units/:unitId",
    "title": "Request unit progress",
    "name": "GetUnitDetails",
    "group": "Report",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>Course ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unitId",
            "description": "<p>Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "report",
            "description": "<p>Unit and students with progress stats.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"summary\": {\n    \"_id\": \"5ab2b80a6fab4a3ae0cd672d\",\n    \"updatedAt\": \"2018-03-21T19:56:13.326Z\",\n    \"createdAt\": \"2018-03-21T19:52:42.716Z\",\n    \"_course\": \"5a53c474a347af01b84e54b7\",\n    \"progressable\": true,\n    \"weight\": 0,\n    \"name\": \"Progressable unit\",\n    \"description\": null,\n    \"deadline\": \"2018-03-21T22:59:00.000Z\",\n    \"__v\": 1,\n    \"__t\": \"task\",\n    \"tasks\": [...],\n    \"progressData\": [{\n        \"name\": \"What's the answer to life and everything?\",\n        \"series\": [{\n            \"name\": \"correct\",\n            \"value\": 1\n        }, {\n            \"name\": \"wrong\",\n            \"value\": 0\n        }, {\n            \"name\": \"no data\",\n            \"value\": 5\n        }]\n    }, {\n        \"name\": \"How are you?\",\n        \"series\": [{\n            \"name\": \"correct\",\n            \"value\": 0\n        }, {\n            \"name\": \"wrong\",\n            \"value\": 1\n        }, {\n            \"name\": \"no data\",\n            \"value\": 5\n        }]\n    }, {\n        \"name\": \"Best questions ever, huh?\",\n        \"series\": [{\n            \"name\": \"correct\",\n            \"value\": 1\n        }, {\n            \"name\": \"wrong\",\n            \"value\": 0\n        }, {\n            \"name\": \"no data\",\n            \"value\": 5\n        }]\n    }]\n},\n\"details\": [{\n    \"_id\": \"5954bc9e23de070007fad033\",\n    \"updatedAt\": \"2018-01-25T10:54:35.326Z\",\n    \"createdAt\": \"2017-06-29T08:38:54.864Z\",\n    \"email\": \"max@mustermann.me\",\n    \"uid\": \"12345\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"lastVisitedCourses\": [\"597df6d5b7a9c0000616637f\", \"5a5f3b70b5cbe70006f9befc\", \"59faf40c772e1300067d2ae6\"],\n    \"role\": \"admin\",\n    \"profile\": {\n        \"theme\": \"default\",\n        \"lastName\": \"Mustermann\",\n        \"firstName\": \"Max\"\n    },\n    \"id\": \"5954bc9e23de070007fad033\",\n    \"progress\": {\n        \"_id\": \"5a69b7680146c60006249626\",\n        \"done\": false,\n        \"updatedAt\": \"2018-01-25T10:54:32.698Z\",\n        \"createdAt\": \"2018-01-25T10:54:32.698Z\",\n        \"unit\": \"5a460967302ddd0006331075\",\n        \"course\": \"597df6d5b7a9c0000616637f\",\n        \"answers\": {\n            \"5a460967302ddd000633106e\": {\n                \"5a460967302ddd0006331070\": false,\n                \"5a460967302ddd000633106f\": true\n            },\n            \"5a460967302ddd0006331071\": {\n                \"5a460967302ddd0006331074\": false,\n                \"5a460967302ddd0006331073\": false,\n                \"5a460967302ddd0006331072\": true\n            }\n        },\n        \"type\": \"task-unit-progress\",\n        \"user\": \"5954bc9e23de070007fad033\",\n        \"__v\": 0,\n        \"__t\": \"task-unit-progress\"\n    }\n}, {\n    \"_id\": \"5954c62923de070007fad047\",\n    \"updatedAt\": \"2017-06-29T09:19:54.227Z\",\n    \"createdAt\": \"2017-06-29T09:19:37.436Z\",\n    \"email\": \"geli.hda@gmail.com\",\n    \"uid\": \"744961\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"lastVisitedCourses\": [],\n    \"role\": \"student\",\n    \"profile\": {\n        \"lastName\": \"Gerhard Paule\",\n        \"firstName\": \"Von Schröder\"\n    },\n    \"id\": \"5954c62923de070007fad047\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>You are no admin or teacher for this course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ReportController.ts",
    "groupTitle": "Report"
  },
  {
    "type": "get",
    "url": "/api/report/overview/users/:id",
    "title": "Request user overview",
    "name": "GetUserOverview",
    "group": "Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>List of courses with progress stats.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"_id\": \"5a134dcc104f7700067562c0\",\n    \"name\": \"katacourse\",\n    \"lectures\": [{...}],\n    \"hasAccessKey\": false,\n    \"progressData\": [{\n        \"name\": \"nothing\",\n        \"value\": 1\n    }, {\n        \"name\": \"tried\",\n        \"value\": 0\n    }, {\n        \"name\": \"done\",\n        \"value\": 0\n    }]\n}, {\n    \"_id\": \"5a1dc725a61d110008f0f69d\",\n    \"name\": \"Am I hidden?\",\n    \"lectures\": [{...}, {...}],\n    \"hasAccessKey\": false,\n    \"progressData\": [{\n        \"name\": \"nothing\",\n        \"value\": 1\n    }, {\n        \"name\": \"tried\",\n        \"value\": 1\n    }, {\n        \"name\": \"done\",\n        \"value\": 1\n    }]\n}, {\n    \"_id\": \"5a5f3b70b5cbe70006f9befc\",\n    \"name\": \"Video-Test\",\n    \"lectures\": [{...}],\n    \"hasAccessKey\": false,\n    \"progressData\": [{\n        \"name\": \"nothing\",\n        \"value\": 0\n    }, {\n        \"name\": \"tried\",\n        \"value\": 1\n    }, {\n        \"name\": \"done\",\n        \"value\": 0\n    }]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/ReportController.ts",
    "groupTitle": "Report"
  },
  {
    "type": "delete",
    "url": "/api/units/:id",
    "title": "Delete unit",
    "name": "DeleteUnit",
    "group": "Unit",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unit ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UnitController.ts",
    "groupTitle": "Unit"
  },
  {
    "type": "get",
    "url": "/api/units/:id",
    "title": "Request unit",
    "name": "GetUnit",
    "group": "Unit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unit ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Unit",
            "optional": false,
            "field": "unit",
            "description": "<p>Unit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c858\",\n    \"updatedAt\": \"2017-11-08T22:00:11.500Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.500Z\",\n    \"name\": \"What is Lorem Ipsum?\",\n    \"description\": \"...\",\n    \"markdown\": \"# What is Lorem Ipsum?\\n**Lorem Ipsum** is simply dummy text of the printing and typesetting industry.\",\n    \"_course\": \"5a037e6b60f72236d8e7c83b\",\n    \"unitCreator\": \"5a037e6b60f72236d8e7c834\",\n    \"type\": \"free-text\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UnitController.ts",
    "groupTitle": "Unit"
  },
  {
    "type": "post",
    "url": "/api/units/",
    "title": "Add unit",
    "name": "PostUnit",
    "group": "Unit",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>New unit data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Unit",
            "optional": false,
            "field": "unit",
            "description": "<p>Added unit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c858\",\n    \"updatedAt\": \"2017-11-08T22:00:11.500Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.500Z\",\n    \"name\": \"What is Lorem Ipsum?\",\n    \"description\": \"...\",\n    \"markdown\": \"# What is Lorem Ipsum?\\n**Lorem Ipsum** is simply dummy text of the printing and typesetting industry.\",\n    \"_course\": \"5a037e6b60f72236d8e7c83b\",\n    \"type\": \"free-text\",\n    \"unitCreator\": \"5a037e6b60f72236d8e7c834\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid combination of file upload and unit data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UnitController.ts",
    "groupTitle": "Unit"
  },
  {
    "type": "put",
    "url": "/api/units/:id",
    "title": "Update unit",
    "name": "PutUnit",
    "group": "Unit",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>New unit data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Unit",
            "optional": false,
            "field": "unit",
            "description": "<p>Updated unit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6b60f72236d8e7c858\",\n    \"updatedAt\": \"2018-01-29T23:43:07.220Z\",\n    \"createdAt\": \"2017-11-08T22:00:11.500Z\",\n    \"name\": \"What is Lorem Ipsum?\",\n    \"description\": \"...\",\n    \"markdown\": \"# What is Lorem Ipsum?\\n**Lorem Ipsum** is simply dummy text of the printing and typesetting industry.\",\n    \"_course\": \"5a037e6b60f72236d8e7c83b\",\n    \"type\": \"free-text\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid combination of file upload and unit data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UnitController.ts",
    "groupTitle": "Unit"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>Confirmation of deletion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>There are no other users with admin privileges.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Request user with certain ID",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6a60f72236d8e7c81d\",\n    \"updatedAt\": \"2018-01-08T19:27:49.483Z\",\n    \"createdAt\": \"2017-11-08T22:00:10.899Z\",\n    \"uid\": \"123456\",\n    \"email\": \"student1@test.local\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"role\": \"student\",\n    \"profile\": {\n        \"firstName\": \"Tick\",\n        \"lastName\": \"Studi\",\n        \"picture\": {\n            \"alias\": \"IMG_20141226_211216.jpg\",\n            \"name\": \"5a037e6a60f72236d8e7c81d-9558.jpg\",\n            \"path\": \"uploads\\\\users\\\\5a037e6a60f72236d8e7c81d-9558.jpg\"\n        }\n    },\n    \"id\": \"5a037e6a60f72236d8e7c81d\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>User was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/roles/",
    "title": "Request all user roles",
    "name": "GetUserRoles",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>List of user roles.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    \"student\",\n    \"teacher\",\n    \"admin\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Request all users",
    "name": "GetUsers",
    "group": "User",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"_id\": \"5a037e6a60f72236d8e7c81d\",\n        \"updatedAt\": \"2018-01-08T19:27:49.483Z\",\n        \"createdAt\": \"2017-11-08T22:00:10.899Z\",\n        \"uid\": \"123456\",\n        \"email\": \"student1@test.local\",\n        \"__v\": 0,\n        \"isActive\": true,\n        \"role\": \"student\",\n        \"profile\": {\n            \"firstName\": \"Tick\",\n            \"lastName\": \"Studi\",\n            \"picture\": {\n                \"alias\": \"IMG_20141226_211216.jpg\",\n                \"name\": \"5a037e6a60f72236d8e7c81d-9558.jpg\",\n                \"path\": \"uploads\\\\users\\\\5a037e6a60f72236d8e7c81d-9558.jpg\"\n            }\n        },\n        \"id\": \"5a037e6a60f72236d8e7c81d\"\n    },\n    {\n        \"uid\": null,\n        \"_id\": \"5a037e6a60f72236d8e7c815\",\n        \"updatedAt\": \"2017-11-08T22:00:10.898Z\",\n        \"createdAt\": \"2017-11-08T22:00:10.898Z\",\n        \"email\": \"teacher2@test.local\",\n        \"__v\": 0,\n        \"isActive\": true,\n        \"role\": \"teacher\",\n        \"profile\": {\n            \"firstName\": \"Ober\",\n            \"lastName\": \"Lehrer\"\n        },\n        \"id\": \"5a037e6a60f72236d8e7c815\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/picture/:id",
    "title": "Add picture to user profile",
    "name": "PostUserPicture",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User target ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>Affected user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6a60f72236d8e7c81d\",\n    \"updatedAt\": \"2018-01-08T19:27:49.483Z\",\n    \"createdAt\": \"2017-11-08T22:00:10.899Z\",\n    \"uid\": \"123456\",\n    \"email\": \"student1@test.local\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"role\": \"student\",\n    \"profile\": {\n        \"firstName\": \"Tick\",\n        \"lastName\": \"Studi\",\n        \"picture\": {\n            \"alias\": \"IMG_20141226_211216.jpg\",\n            \"name\": \"5a037e6a60f72236d8e7c81d-9558.jpg\",\n            \"path\": \"uploads\\\\users\\\\5a037e6a60f72236d8e7c81d-9558.jpg\"\n        }\n    },\n    \"id\": \"5a037e6a60f72236d8e7c81d\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Forbidden format of uploaded picture.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Update user",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "student"
      },
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User target ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "newUser",
            "description": "<p>New user data.</p>"
          },
          {
            "group": "Parameter",
            "type": "IUser",
            "optional": false,
            "field": "currentUser",
            "description": "<p>Currently logged in user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>Updated user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5a037e6a60f72236d8e7c81d\",\n    \"updatedAt\": \"2018-01-08T19:27:49.483Z\",\n    \"createdAt\": \"2017-11-08T22:00:10.899Z\",\n    \"uid\": \"123456\",\n    \"email\": \"student1@test.local\",\n    \"__v\": 0,\n    \"isActive\": true,\n    \"role\": \"student\",\n    \"profile\": {\n        \"firstName\": \"Tick\",\n        \"lastName\": \"Studi\",\n        \"picture\": {\n            \"alias\": \"IMG_20141226_211216.jpg\",\n            \"name\": \"5a037e6a60f72236d8e7c81d-9558.jpg\",\n            \"path\": \"uploads\\\\users\\\\5a037e6a60f72236d8e7c81d-9558.jpg\"\n        }\n    },\n    \"id\": \"5a037e6a60f72236d8e7c81d\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid update role.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>You don't have the authorization to change a user of this role.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/members/search",
    "title": "Request users with certain role and query",
    "name": "SearchUser",
    "group": "User",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"student\"",
              "\"teacher\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query string.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Search result.</p>"
          },
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "result.users",
            "description": "<p>List of found users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Number of users with given role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"users\": [\n        {\n            \"_id\": \"5a037e6a60f72236d8e7c81d\",\n            \"updatedAt\": \"2018-01-08T19:27:49.483Z\",\n            \"createdAt\": \"2017-11-08T22:00:10.899Z\",\n            \"uid\": \"123456\",\n            \"email\": \"student1@test.local\",\n            \"__v\": 0,\n            \"score\": 1.1,\n            \"isActive\": true,\n            \"role\": \"student\",\n            \"profile\": {\n                \"firstName\": \"Tick\",\n                \"lastName\": \"Studi\",\n                \"picture\": {\n                    \"alias\": \"IMG_20141226_211216.jpg\",\n                    \"name\": \"5a037e6a60f72236d8e7c81d-9558.jpg\",\n                    \"path\": \"uploads\\\\users\\\\5a037e6a60f72236d8e7c81d-9558.jpg\"\n                }\n            },\n            \"id\": \"5a037e6a60f72236d8e7c81d\"\n        },\n        {\n            \"_id\": \"5a037e6a60f72236d8e7c81f\",\n            \"updatedAt\": \"2017-11-08T22:00:10.900Z\",\n            \"createdAt\": \"2017-11-08T22:00:10.900Z\",\n            \"uid\": \"345678\",\n            \"email\": \"student3@test.local\",\n            \"__v\": 0,\n            \"score\": 1.1,\n            \"isActive\": true,\n            \"role\": \"student\",\n            \"profile\": {\n                \"firstName\": \"Track\",\n                \"lastName\": \"Studi\"\n            },\n            \"id\": \"5a037e6a60f72236d8e7c81f\"\n        },\n        {\n            \"_id\": \"5a037e6a60f72236d8e7c81e\",\n            \"updatedAt\": \"2017-11-08T22:00:10.900Z\",\n            \"createdAt\": \"2017-11-08T22:00:10.900Z\",\n            \"uid\": \"234567\",\n            \"email\": \"student2@test.local\",\n            \"__v\": 0,\n            \"score\": 1.1,\n            \"isActive\": true,\n            \"role\": \"student\",\n            \"profile\": {\n                \"firstName\": \"Trick\",\n                \"lastName\": \"Studi\"\n            },\n            \"id\": \"5a037e6a60f72236d8e7c81e\"\n        }\n    ],\n    \"meta\": {\n        \"count\": 31\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Method not allowed for this role.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/UserController.ts",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/whitelist/:id",
    "title": "Delete whitelist user",
    "name": "DeleteWhitelistUser",
    "group": "Whitelist",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Whitelist user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Empty object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/WhitelistController.ts",
    "groupTitle": "Whitelist"
  },
  {
    "type": "get",
    "url": "/api/whitelist/:id",
    "title": "Request whitelist user",
    "name": "GetWhitelistUser",
    "group": "Whitelist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Whitelist user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "WhitelistUser",
            "optional": false,
            "field": "whitelistUser",
            "description": "<p>Whitelist user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"__v\": 0,\n    \"updatedAt\": \"2018-03-21T23:22:23.758Z\",\n    \"createdAt\": \"2018-03-21T23:22:23.758Z\",\n    \"_id\": \"5ab2e92fda32ac2ab0f04b78\",\n    \"firstName\": \"max\",\n    \"lastName\": \"mustermann\",\n    \"uid\": \"876543\",\n    \"courseId\": {...},\n    \"id\": \"5ab2e92fda32ac2ab0f04b78\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/WhitelistController.ts",
    "groupTitle": "Whitelist"
  },
  {
    "type": "post",
    "url": "/api/whitelist/",
    "title": "Add whitelist user",
    "name": "PostWhitelistUser",
    "group": "Whitelist",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "IWhitelistUser",
            "optional": false,
            "field": "whitelistUser",
            "description": "<p>New whitelist user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "WhitelistUser",
            "optional": false,
            "field": "savedWhitelistUser",
            "description": "<p>Added whitelist user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"__v\": 0,\n    \"updatedAt\": \"2018-03-21T23:22:23.758Z\",\n    \"createdAt\": \"2018-03-21T23:22:23.758Z\",\n    \"_id\": \"5ab2e92fda32ac2ab0f04b78\",\n    \"firstName\": \"max\",\n    \"lastName\": \"mustermann\",\n    \"uid\": \"876543\",\n    \"courseId\": {...},\n    \"id\": \"5ab2e92fda32ac2ab0f04b78\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>That matriculation number is already in use for this course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/WhitelistController.ts",
    "groupTitle": "Whitelist"
  },
  {
    "type": "put",
    "url": "/api/whitelist/:id",
    "title": "Update whitelist user",
    "name": "PutWhitelistUser",
    "group": "Whitelist",
    "permission": [
      {
        "name": "teacher"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Whitelist user ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "IWhitelistUser",
            "optional": false,
            "field": "whitelistUser",
            "description": "<p>New whitelist user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "WhitelistUser",
            "optional": false,
            "field": "updatedWhitelistUser",
            "description": "<p>Updated whitelist user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"__v\": 0,\n    \"updatedAt\": \"2018-03-21T23:24:56.758Z\",\n    \"createdAt\": \"2018-03-21T23:22:23.758Z\",\n    \"_id\": \"5ab2e92fda32ac2ab0f04b78\",\n    \"firstName\": \"maximilian\",\n    \"lastName\": \"mustermann\",\n    \"uid\": \"876543\",\n    \"courseId\": {...},\n    \"id\": \"5ab2e92fda32ac2ab0f04b78\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>That matriculation number is already in use for this course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/WhitelistController.ts",
    "groupTitle": "Whitelist"
  },
  {
    "type": "get",
    "url": "/api/whitelist/check/:whitelist",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n      \"uid\": \"<uid>\",\n      \"exists\": true\n  },\n  {\n      \"uid\": \"<non-existing-uid>\",\n      \"exists\": false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "whitelistToCheck",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/WhitelistController.ts",
    "group": "_home_travis_build_geli_lms_geli_api_src_controllers_WhitelistController_ts",
    "groupTitle": "_home_travis_build_geli_lms_geli_api_src_controllers_WhitelistController_ts",
    "name": "GetApiWhitelistCheckWhitelist"
  }
] });
