# FinancePeer-Backend
## This is the backend part of the application in which there are routes for the following type of requests:
- Login 
- Signup
- Upload a json file & then save the data in database
- Fetch all saved data. 

| Request | Route | Accepted Data |
| ------ | ------ | ------------- |
| Signup | '/user/register' | Json data: {"username" : "xyz", "password": "secret"} |
| Login | '/user/login' | Json data: {"username" : "xyz", "password": "secret"} |
| Upload & Save a File | '/user/upload' | Form data: [jsonFile: <json_file.json>] |
| Get Uploaded User Details | '/user/details' | N/A |
