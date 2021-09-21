# FinancePeer-Backend
## _This is the backend part of the application in which there are routes for the following type of requests:
- Login 
- Signup
- Upload a json file & then save the data in database
- Fetch all saved data. 

| Request | Route | Accepted Data |
| ------ | ------ | ------------- |
| Signup | '/user/register' | [Json data: {"username" : "xyz", "password": "secret"}][PlDb] |
| Login | '/user/login' | [Json data: {"username" : "xyz", "password": "secret"}][PlGh] |
| Upload & Save a File | '/user/upload' | [Form data: jsonFile: <json_file.json>][PlGd] |
| Get Uploaded User Details | '/user/details' | [N/A] [PlGa] |
