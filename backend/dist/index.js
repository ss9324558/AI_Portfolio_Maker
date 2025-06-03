'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the AI Portfolio Maker API');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
