# WhatsApp Chat Assistant with OpenAI

This project demonstrates how to create a WhatsApp chat assistant powered by the OpenAI GPT-3.5 Turbo model.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases a WhatsApp chat assistant that utilizes the OpenAI GPT-3.5 Turbo model to provide conversational responses. The assistant engages with users in a chat format, understands their messages, and generates relevant responses.

## Features

- Seamless integration with the OpenAI GPT-3.5 Turbo model.
- Uses the Venom-Bot library to interact with WhatsApp.
- Organized codebase with modularized components.
- Handles incoming messages, generates assistant responses, and maintains conversation history.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Docker (for Redis container).
- An OpenAI GPT-3 API key.
- WhatsApp account and session using Venom-Bot.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:VitornscSilva/openai-whatsapp-bot.git
   cd openai-whatsapp-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
   or

   ```bash
   yarn
   ```

### Configuration

Configure your OpenAI GPT-3 API key and Redis settings by creating a `.env` file in the root directory and adding the necessary environment variables. You can reference the structure of the configuration file (`src/config/index.ts`) for required variables.

Example `.env` file:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
REDIS_HOST=redis_host
REDIS_PORT=6379
REDIS_DB=0
```

## Usage

1. Start the WhatsApp chat assistant:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. Scan the QR code to log in to your WhatsApp account.

3. Interact with the chat assistant by sending messages to the WhatsApp number associated with the session.

## Folder Structure

The project structure is organized for modularity and readability:

```
src/
|-- config/
|   |-- index.ts
|
|-- constants/
|   |-- storeName.ts
|
|-- lib/
|   |-- openai.ts
|   |-- redis.ts
|
|-- models/
|   |-- customerChat.ts
|
|-- prompts/
|   |-- hamburguerAgent.ts
|
|-- services/
|   |-- chatService.ts
|
|-- utils/
|   |-- initPrompt.ts
|   |-- normalizePhoneNumber.ts
|
|-- index.ts
docker-compose.yml
```

For more details about the folder structure, refer to the [Folder Structure](#folder-structure) section in this README.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
