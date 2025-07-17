
# 🚀 Smile ID Liveness Detection Backend (TypeScript)

A scalable and production-ready Node.js backend (written in TypeScript) for integrating Smile Identity's **Liveness Detection** using their [`smile-identity-core`](https://www.npmjs.com/package/smile-identity-core) SDK.

---

## 📦 Tech Stack

- **Node.js** (v18+)
- **TypeScript**
- **Express**
- **Smile Identity Core SDK**
- **dotenv** for environment configuration
- Clean, layered architecture with controller/service separation

---

## 🔧 Features

- ✅ Selfie + Liveness image capture submission (`job_type: 4`)
- ✅ Secure backend to protect Smile ID credentials
- ✅ Scalable folder structure (config, routes, services, controllers)
- ✅ Centralized error handling
- ✅ Environment-based config (`sandbox` or `production`)

---

## 📁 Project Structure

```
/src
│
├── app.ts               # Express app config
├── server.ts            # Entry point
│
├── config/
│   └── smile.config.ts  # Smile ID env vars
│
├── controllers/
│   └── liveness.controller.ts  # Handles incoming requests
│
├── services/
│   └── smile.service.ts        # Business logic for Smile ID API
│
├── routes/
│   └── liveness.routes.ts      # API route definitions
│
├── middlewares/
│   └── error.middleware.ts     # Global error handler
│
└── utils/
    └── logger.ts               # (Optional) Central logging utils
```

---

## ⚙️ Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourname/smile-server.git
cd smile-server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
SMILE_PARTNER_ID=your_partner_id
SMILE_API_KEY=your_api_key
SMILE_ENVIRONMENT=sandbox
```

### 4. Run the development server

```bash
npm run dev
```

---

## 🧪 API Usage

### Endpoint

```http
POST /api/liveness
```

### Request Body

```json
{
  "images": [
    { "image": "base64string", "image_type_id": 0 },
    { "image": "base64string", "image_type_id": 1 }
  ],
  "meta": {
    "libraryVersion": "10.0.3"
  }
}
```

### Example Response

```json
{
  "job_complete": true,
  "job_success": true,
  "timestamp": "2025-07-17T13:39:43.661Z",
  "confidence": "99",
  "selfie_check": "Passed",
  "liveness_check": "Passed",
  "register_selfie": "Passed",
  "result_code": "0840",
  "result_text": "Enroll User",
  "result_type": "SAIA",
  "is_final_result": "true"
}
```

---

## 🛡️ Security Notes

- Do **NOT** expose your Smile ID API key in the frontend.
- All Smile ID job submissions must go through this secure backend.
- Use HTTPS in production.

---

## 🚀 Deployment Options

You can deploy this backend easily to:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Vercel Serverless](https://vercel.com/)
- [Firebase Functions](https://firebase.google.com/products/functions)
- AWS Lambda + API Gateway

---

## 📝 License

MIT — © [Smile Identity](https://usesmileid.com/legal/terms-and-conditions)

---

## 📬 Support

- Smile ID Developer Docs: [https://docs.usesmileid.com](https://docs.usesmileid.com)
- Need help? [Open an issue](https://github.com)
