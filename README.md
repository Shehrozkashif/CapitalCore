# CapitalCore

CapitalCore is a modern finance management web application designed to help users efficiently track, manage, and optimize their financial activities. Built using **Next.js** and **Supabase**, it leverages the latest web technologies to provide a seamless and secure user experience.

---

## Features

- **User Authentication**: Secure user login and registration with Clerk integration.
- **Financial Tracking**: Keep track of income, expenses, and overall financial health.
- **Data Visualization**: Visualize financial data with intuitive charts and graphs.
- **API Integration**: Integrated with Gemini API for cryptocurrency data.
- **Email Notifications**: Leveraging Resend API for timely email updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React Framework)
- **Backend**: [Supabase](https://supabase.com/) (Database and Authentication)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-First CSS Framework)
- **ORM**: [Prisma](https://www.prisma.io/) (Database ORM)
- **Event-Driven Workflows**: [Inngest](https://www.inngest.com/) (Event-Driven Architecture)
- **Authentication**: [Clerk](https://clerk.dev/) (User Management)
- **APIs**:
  - Gemini API (Cryptocurrency)
  - Resend API (Email Notifications)
- **UI Components**: [Shadcn UI](https://shadcn.dev/) (Accessible and Composable UI Components)
- **Key Management**: ArcJet for secure API key handling.

---

## Installation and Setup

### Prerequisites
- Node.js (v16.8.0 or later)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/your-username/capitalcore.git
cd capitalcore
```

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```
Replace the placeholder values with your actual keys and URLs.

### Start the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to access the app locally.

---

## Deployment

CapitalCore can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js. For example, to deploy on [Vercel](https://vercel.com/):

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Link the project:
   ```bash
   vercel link
   ```

3. Deploy:
   ```bash
   vercel deploy
   ```

---

## API Reference

### Gemini API
Used for fetching cryptocurrency data. 
- **Endpoint**: `https://api.gemini.com/v1`
- **Authentication**: Requires `GEMINI_API_KEY`.

### Resend API
Used for email notifications.
- **Endpoint**: `https://resend.io/api`
- **Authentication**: Requires `RESEND_API_KEY`.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Inngest Documentation](https://www.inngest.com/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Shadcn UI Documentation](https://shadcn.dev/docs)
- [Gemini API Documentation](https://docs.gemini.com)
- [Resend API Documentation](https://resend.io/docs)

