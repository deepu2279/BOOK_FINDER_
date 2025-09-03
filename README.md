# BOOK_FINDER_
 simple React web application that allows users to search for books using the Open Library API. Built as part of the UI Take-Home Challenge.

🚀 Features
🔍 Search books by title.
📖 Display book title, author(s), and first publish year.
⚡ Fast and responsive UI with Tailwind CSS.
❌ Error handling (no results / network issues).
📱 Mobile-friendly design.
🛠️ Tech Stack
React (Vite) – frontend framework

Tailwind CSS – styling

Open Library API – book data

Example endpoint:

https://openlibrary.org/search.json?title={bookTitle}
📂 Project Structure
src/
 ├── App.jsx        # Main component with search logic
 ├── index.css      # Tailwind styles
 ├── main.jsx       # Entry point
 └── components/    # (Optional) extra components
⚙️ Installation & Setup
1. Clone the repo
git clone https://github.com/deepu2279/BOOK_FINDER_
cd book-finder
2. Install dependencies
npm install
3. Run locally
npm run dev
App will be running on: [https://yzxk9j-3000.csb.app/]

🌍 Deployment
Deployed on CodeSandbox: 👉 Live Demo Link

📌 How It Works
Enter a book title in the search bar.
Click Search.
The app fetches data from Open Library API.
Displays the first 10 matching books with details.

