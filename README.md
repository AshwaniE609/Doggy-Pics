# Doggy-Pics
🐶 Doggy Pics – Random Dog Image API (Godspeed + Dog CEO API)
This is a microservice built using the Godspeed Framework that fetches a random dog image using the public Dog CEO API.

Live Swagger docs (after deploy):
https://your-app-name.onrender.com/docs

📦 Features
Built with the Godspeed microservices framework

Uses a custom REST datasource plugin

Calls the Dog CEO API

Returns a random dog image via GET /dog

Fully documented via Swagger/OpenAPI

🚀 Setup & Run Locally
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/doggy-pics.git
cd doggy-pics
Install dependencies:

bash
Copy
Edit
npm install
Create required folders:

bash
Copy
Edit
mkdir -p src/plugins
Build the project:

bash
Copy
Edit
npm run build
Start the dev server:

bash
Copy
Edit
godspeed serve
Open Swagger Docs:

http://localhost:3000/docs

📁 Project Structure
bash
Copy
Edit
src/
├── datasources/
│   ├── dogapi.yaml           # Config for Dog API
│   └── types/
│       └── rest.ts           # Custom REST plugin
├── events/
│   └── get_dog.yaml          # Event for GET /dog
├── functions/
│   └── get_dog_image.yaml    # Workflow calling Dog API
├── plugins/                  # Required empty folder
🔌 Endpoint
GET /dog
Returns a random dog image from the Dog CEO API.

Sample response:

json
Copy
Edit
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "status": "success"
}
🌐 Deployment (Render.com)
Push your code to GitHub.

Create a new Web Service on Render.com.

Set:

Build Command: npm install && npm run build

Start Command: npm run preview

Port: 3000

Once deployed, access your API at:

arduino
Copy
Edit
https://your-app-name.onrender.com/docs
🐾 Credits
Godspeed Systems

Dog CEO API
